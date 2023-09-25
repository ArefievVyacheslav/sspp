const axios = require('axios')
const { JSDOM } = require('jsdom')
const sleep = require('await-sleep')
const getProduct = require('./getProduct')
const getDeeplinks = require('./getDeeplinks')
const getOptions = require('./getOptions')
const dbWrite = require('./dbWrite')


module.exports = async function getProducts (gender) {
  const products = []
  // получаю опшнсы в зависимости от пола
  let page = 1;
  let options = getOptions(gender, page)
  const res = await axios.post( ...options )
  const dom = new JSDOM(res.data).window.document
  // получаю количество страниц и товары первой страницы
  const pagesCount = parseInt(dom.querySelector('nav.js-catalogue-navigation ul').getAttribute('data-page-count'))
  const productsLinksFirstPage = Array.from(dom.querySelectorAll('div.white-wrapper'))
    .map(link => 'https://www.brd.ru' + link.querySelector('a').href)
  const imagesOnePage = Array.from(dom.querySelectorAll('.main-img'))
    .map(tag => tag.getAttribute('src'))
  // информирую что на первой странице
  console.log(`${page} page ${gender}`)
  // прохожусь по товарам первой страницы
  // for (let [idx, productLink] of productsLinksFirstPage.slice(0,3).entries()) {
  for (let [idx, productLink] of productsLinksFirstPage.entries()) {
    // получаю продукт, вношу в общий массив
    const product = await getProduct(productLink, gender, imagesOnePage[idx])
    if (product) products.push(product)
    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products', gender)
    // пауза, чтоб незалочили
    await sleep(1000)
  }
  // прохожусь по остальным страницам пагинации
  // for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,3)) {
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {
    try {
      let options = getOptions(gender, page)
      // информирую на какой странице
      console.log(`${page} page ${gender}`)
      // получаю продукты на странице
      const resSecond = await axios.post( ...options )
      const domSecond = new JSDOM(resSecond.data).window.document
      const productsLinksOtherPage = Array.from(domSecond.querySelectorAll('div.white-wrapper'))
        .map(link => 'https://www.brd.ru' + link.querySelector('a').href)
      const imagesOtherPage = Array.from(domSecond.querySelectorAll('.main-img'))
        .map(tag => tag.getAttribute('src'))
      // прохожусь по товарам страницы
      // for (let [idx, productLink] of productsLinksOtherPage.slice(0,3).entries()) {
      for (let [idx, productLink] of productsLinksOtherPage.entries()) {
        // получаю продукт, вношу в общий массив
        const product = await getProduct(productLink, gender, imagesOtherPage[idx])
        if (product) products.push(product)
        // информирую о кол-ве собранных товаров
        console.log(products.length, ' products', gender)
        // пауза, чтоб незалочили
        await sleep(1000)
      }
    } catch (e) {
      console.log(page + ' СТРАНИЦА НЕ СОБРАНА', gender)
    }
  }
  // записываю товары с партнёрскими ссылками в базу
  console.log('получаю диплинки для ' + gender.toUpperCase() + ' товаров')
  const productsTotal = await getDeeplinks(products.filter(product => product))
  console.log('записываю в базу ' + gender.toUpperCase() + ' товары')
  await dbWrite(productsTotal)
}
