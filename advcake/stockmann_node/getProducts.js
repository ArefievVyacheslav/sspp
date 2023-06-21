const axios = require('axios')
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
  // получаю количество страниц и товары первой страницы
  const pagesCount = res.data.payload.pagination.total
  const productsOnePage = res.data.payload.products
  // информирую что на первой странице
  console.log('1 page', gender)
  // прохожусь по товарам первой страницы
//   for (let productProto of productsOnePage.slice(0,2)) {
  for (let productProto of productsOnePage) {
    // получаю продукт, вношу в общий массив
    products.push(await getProduct(productProto))
    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products', gender)
    // пауза, чтоб незалочили
    await sleep(1000)
  }
  // прохожусь по остальным страницам пагинации
//   for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,5)) {
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {
    // информирую на какой странице
    console.log(page + ' page', gender)
    // получаю продукты на странице
    options[1].page = page
    const resSecond = await axios.post( ...options )
    const productsOtherPage = resSecond.data.payload.products
    // прохожусь по товарам страницы
    // for (let productProto of productsOtherPage.slice(0,5)) {
    for (let productProto of productsOtherPage) {
      // получаю продукт, вношу в общий массив
      products.push(await getProduct(productProto))
      // информирую о кол-ве собранных товаров
      console.log(products.length, ' products', gender)
      // пауза, чтоб незалочили
      await sleep(1000)
    }
  }
  // записываю товары с партнёрскими ссылками в базу
  console.log('получаю диплинки для ' + gender.toUpperCase() + ' товаров')
  const productsTotal = await getDeeplinks(products.filter(product => product))
  console.log('записываю в базу ' + gender.toUpperCase() + ' товары')
  await dbWrite(productsTotal)
}
