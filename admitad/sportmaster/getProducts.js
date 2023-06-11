const axios = require('axios')
const sleep = require('await-sleep')
const getTransliterate = require('./getTransliterate')
const getDeeplinks = require('./getDeeplinks')
const getOptions = require('./getOptions')
const dbWrite = require('./dbWrite')


let products = []


module.exports = async function getProducts (gender) {

  // получаю опшнсы в зависимости от пола
  const options = getOptions(gender)
  const res = await axios.post( ...options )

  // получаю количество страниц и товары первой страницы
  const pagesCount = res.data.pagination.pagesCount
  const productsOnePage = res.data.products

  // информирую что на первой странице
  console.log('1 page')

  // прохожусь по товарам первой страницы
  // for (let productProto of productsOnePage.slice(0,1)) {
  for (let productProto of productsOnePage) {

    // получаю данные по товару
    const productOptions = getOptions(null, productProto.productId)
    const { data } = await axios.get( ...productOptions )

    products.push({
      id: Math.floor(Math.random() * 9e9) + 1e9, age: 'Взрослый', benefit: productProto.price.discountAmount,
      name: productProto.name, shop: 'sportmaster', sizes: productProto.sizes.map(sizeObj => sizeObj?.sizeEur || sizeObj.sizeRus),
      oldprice: productProto.price.catalog, pp: 'admitad', price: productProto.price.retail, sale: productProto.price.discountRate,
      color: productProto.color, color_t: getTransliterate(productProto.color), installment: true, images: productProto.media.photoUrls,
      like: 0, link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/', brand: data.productBrand, gender: data.productGender,
      brandCountry: false, brandCountry_t: false, category: data.productType, category_t: getTransliterate(data.productType), country: false,
      country_t: false, delivery: ['ru', 'rb', 'kz', 'am', 'kg'], deliveryPrice: false, description: false, info: false, season: false, season_t: false,
      style: 'Спортивный стиль', style_t: getTransliterate('Спортивный стиль'), structure: false, subcategory: data.productGroup,
      subcategory_t: getTransliterate(data.productGroup)
    })

    // информирую о кол-ве собранных товаров
    console.log(products.length, ' products')

    // пауза, чтоб незалочили
    await sleep(300)
  }

  // прохожусь по остальным страницам пагинации
  // for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2).slice(0,1)) {
  for (let page of Array.from({ length: pagesCount - 1 }, (_, index) => index + 2)) {

    // информирую на какой странице
    console.log(page + ' page')

    // получаю продукты на странице
    options[1].page = page
    const resSecond = await axios.post( ...options )
    const productsOtherPage = resSecond.data.products

    // прохожусь по товарам страницы
    // for (let productProto of productsOtherPage.slice(0,1)) {
    for (let productProto of productsOtherPage) {

      // получаю данные по товару
      const productOptions = getOptions(null, productProto.productId)
      const { data } = await axios.get( ...productOptions )

      products.push({
        id: Math.floor(Math.random() * 9e9) + 1e9, age: 'Взрослый', benefit: productProto.price.discountAmount,
        name: productProto.name, shop: 'sportmaster', sizes: productProto.sizes.map(sizeObj => sizeObj?.sizeEur || sizeObj.sizeRus),
        oldprice: productProto.price.catalog, pp: 'admitad', price: productProto.price.retail, sale: productProto.price.discountRate,
        color: productProto.color, color_t: getTransliterate(productProto.color), installment: true, images: productProto.media.photoUrls,
        like: 0, link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/', brand: data.productBrand, gender: data.productGender,
        brandCountry: false, brandCountry_t: false, category: data.productType, category_t: getTransliterate(data.productType), country: false,
        country_t: false, delivery: ['ru', 'rb', 'kz', 'am', 'kg'], deliveryPrice: false, description: false, info: false, season: false, season_t: false,
        style: 'Спортивный стиль', style_t: getTransliterate('Спортивный стиль'), structure: false, subcategory: data.productGroup,
        subcategory_t: getTransliterate(data.productGroup)
      })
      await sleep(300)

      // информирую о кол-ве собранных товаров
      console.log(products.length, ' products')
    }
  }

  // записываю товары с партнёрскими ссылками в базу
  console.log('получаю диплинки для товаров')
  const productsTotal = await getDeeplinks(products)

  console.log('записываю в базу товары')
  await dbWrite(productsTotal)

  // обнуляю в конце
  products = []
}


