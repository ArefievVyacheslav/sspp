const axios = require('axios')
const { JSDOM } = require('jsdom')
const sleep = require('await-sleep')
const getProduct = require('./getProduct')
const getDeeplinks = require('./getDeeplinks')
const getOptions = require('./getOptions')
const dbWrite = require('./dbWrite')
const fs = require('fs');


module.exports = async function getProducts (gender) {
  const products = []
  // получаю опшнсы в зависимости от пола
  const options = getOptions(gender)
  const res = await axios.post( ...options )
  const dom = new JSDOM(res.data).window.document
  // получаю количество страниц и товары первой страницы
  const pagesCount = dom.querySelector('nav.js-catalogue-navigation ul').getAttribute('data-page-count')
  const productsLinksOnePage = Array.from(dom.querySelectorAll('div.white-wrapper'))
    .map(link => 'https://www.brd.ru' + link.querySelector('a').href)
  // информирую что на первой странице
  console.log('1 page', gender)
  // прохожусь по товарам первой страницы
//   for (let productLink of productsLinksOnePage.slice(0,1)) {
  for (let productLink of productsLinksOnePage) {
    // получаю продукт, вношу в общий массив
    const product = await getProduct(productLink, gender)
    if (product) products.push(product)
    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products', gender)
    // пауза, чтоб незалочили
    await sleep(1000)
  }
//   console.log(products)
  // прохожусь по остальным страницам пагинации
//   for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,5)) {
    for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {
      try {
        // информирую на какой странице
        console.log(page + ' page', gender)
        // получаю продукты на странице
        options[1].params.page = page
        const resSecond = await axios.post( ...options )
        const dom = new JSDOM(resSecond.data).window.document
        const productsLinksOtherPage = Array.from(dom.querySelectorAll('div.white-wrapper'))
          .map(link => 'https://www.brd.ru' + link.querySelector('a').href)
        // прохожусь по товарам страницы
        // for (let productLink of productsLinksOtherPage.slice(0,1)) {
        for (let productLink of productsLinksOtherPage) {
          // получаю продукт, вношу в общий массив
          const product = await getProduct(productLink, gender)
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
    fs.writeFileSync('fileWithArray.json', JSON.stringify(products, null, 4), 'utf-8');
    // записываю товары с партнёрскими ссылками в базу
    // console.log('получаю диплинки для ' + gender.toUpperCase() + ' товаров')
    // const productsTotal = await getDeeplinks(products.filter(product => product))
    // console.log('записываю в базу ' + gender.toUpperCase() + ' товары')
    // await dbWrite(productsTotal)
  }