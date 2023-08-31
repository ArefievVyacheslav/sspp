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
  const options = getOptions(gender)
  const res = await axios.post( ...options )
  const dom = new JSDOM(res.data).window.document
  const pagination = dom.querySelectorAll('.num')
  // получаю количество страниц и товары первой страницы
  const pagesCount = pagination[pagination.length - 1].textContent
  const productsLinksOnePage = Array.from(dom.querySelectorAll('.product__images'))
    .map(link => 'https://elyts.ru' + link.getAttribute('href'))
  // информирую что на первой странице
  console.log('1 page', gender)
  // прохожусь по товарам первой страницы
  for (let productLink of productsLinksOnePage.slice(0,13)) {
  // for (let productProto of productsOnePage) {
    // получаю продукт, вношу в общий массив
    const product = await getProduct(gender, productLink)
    if (product) products.push(product)
    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products', gender)
    // пауза, чтоб незалочили
    await sleep(1000)
  }
  // прохожусь по остальным страницам пагинации
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,13)) {
  // for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {
    try {
      // информирую на какой странице
      console.log(page + ' page', gender)
      // получаю продукты на странице
      const optionsArr = options[0].split('=')
      options[0] = optionsArr[0] + '=' + page.toString()
      const resSecond = await axios.post( ...options )
      const dom = new JSDOM(resSecond.data).window.document
      const productsLinksOtherPage = Array.from(dom.querySelectorAll('.product__images'))
        .map(link => 'https://elyts.ru' + link.getAttribute('href'))
      // прохожусь по товарам страницы
      for (let productLink of productsLinksOtherPage.slice(0,13)) {
      // for (let productLink of productsLinksOtherPage) {
        // получаю продукт, вношу в общий массив
        const product = await getProduct(gender, productLink)
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


