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
  const sizeWrap = Array.from(dom.querySelectorAll('.product__sizes__content'))
    .map(tag => Array.from(tag.querySelectorAll('.size-item')).filter(size => !size.className.includes('rezerve')).map(sizeTag => sizeTag.textContent))
  const productsLinksOnePage = Array.from(dom.querySelectorAll('.product__images'))
    .map(link => 'https://elyts.ru' + link.getAttribute('href'))
  // информирую что на первой странице
  console.log('1 page', gender)
  // прохожусь по товарам первой страницы
  // for (let productLink of productsLinksOnePage.slice(0,5)) {
  for (let productLink of productsLinksOnePage) {
    // получаю продукт, вношу в общий массив
    let sizes = sizeWrap[ productsLinksOnePage.indexOf(productLink) ]
    if (sizes && sizes.some(size => size.includes(' / '))) sizes = sizes.map(size => size.split(' / ')[0])
    const product = await getProduct(productLink, gender, sizes)
    if (product) products.push(product)
    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products', gender)
    // пауза, чтоб незалочили
    await sleep(1500)
  }
  // прохожусь по остальным страницам пагинации
  // for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,5)) {
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {
    try {
      // информирую на какой странице
      console.log(page + ' page', gender)
      // получаю продукты на странице
      const optionsArr = options[0].split('=')
      options[0] = optionsArr[0] + '=' + page.toString()
      const resSecond = await axios.post( ...options )
      const domSecond = new JSDOM(resSecond.data).window.document
      const sizeOtherWrap = Array.from(domSecond.querySelectorAll('.product__sizes__content'))
        .map(tag => Array.from(tag.querySelectorAll('.size-item')).filter(size => !size.className.includes('rezerve')).map(sizeTag => sizeTag.textContent))
      const productsLinksOtherPage = Array.from(domSecond.querySelectorAll('.product__images'))
        .map(link => 'https://elyts.ru' + link.getAttribute('href'))
      // прохожусь по товарам страницы
      // for (let productLink of productsLinksOtherPage.slice(0,5)) {
      for (let productLink of productsLinksOtherPage) {
        // получаю продукт, вношу в общий массив
        let sizes = sizeOtherWrap[ productsLinksOtherPage.indexOf(productLink) ]
        if (sizes && sizes.some(size => size.includes(' / '))) sizes = sizes.map(size => size.split(' / ')[0])
        const product = await getProduct(productLink, gender, sizes)
        if (product) products.push(product)
        // информирую о кол-ве собранных товаров
        console.log(products.length, ' products', gender)
        // пауза, чтоб незалочили
        await sleep(1500)
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


