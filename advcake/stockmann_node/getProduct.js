const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {

  // получаю данные по товару
  const productOptions = getOptions(null, productProto.link)
  const { data } = await axios.get( ...productOptions )

  let colorValue = false
  let imagesArray = []
  let infoArray = []
  let seasonValue = false
  let sizesArray = []
  let styleValue = false

  for (let productColors of productProto.colors) {
    if (productColors.xmlId === productProto.xmlId && productColors.name != "") {
        colorValue = productColors.name;
      }
  }

  for (let image of productProto.images) {
    imagesArray.push(image.default.webp.src2x)
  }

  if (data.payload.properties.length >= 3) {
    for (let property of data.payload.properties.slice(2)) {
      infoArray.push(property.name + ': ' + property.value)
    }
  }

  for (let productSeason of data.payload.properties) {
    if (productSeason.name === 'Сезон') {
        seasonValue = productSeason.value
    }
  }

  for (let productSizes of data.payload.sizes) {
    sizesArray.push(productSizes.main.split('/')[0])
  }

  for (let productStyle of data.payload.properties) {
    if (productStyle.name === 'Стиль') {
        styleValue = productStyle.value
    }
  }

  return {
    id: Math.floor(Math.random() * 9e9) + 1e9,
    age: 'Взрослый',
    benefit: productProto.price - productProto.priceDiscount,
    brand: productProto.brand,
    brandCountry: false,
    brandCountry_t: false,
    category: data.payload.breadcrumbs[2].name,
    category_t: getTransliterate(data.payload.breadcrumbs[2].name),
    color: colorValue
    ? colorValue.replaceAll('ё', 'е')
    : false,
    color_t: colorValue
      ? getTransliterate(colorValue)
      : false,
    country: false,
    country_t: false,
    create: new Date,
    delivery: ['ru'],
    deliveryPrice: 199,
    description: data.payload.description,
    gender: data.payload.breadcrumbs[1].name === "Мужчинам"
      ? 'Мужской'
      : 'Женский',
    installment: false,
    images: imagesArray,
    like: 0,
    link: 'https://stockmann.ru' + productProto.link,
    name: productProto.name + ', ' + productProto.brand,
    shop: 'stockmann',
    info: infoArray.length === 0
      ? false
      : infoArray,
    oldprice: productProto.price,
    pp: 'advcake',
    price: productProto.priceDiscount,
    sale: productProto.discount,
    season: seasonValue,
    season_t: seasonValue
      ? getTransliterate(seasonValue)
      : false,
    sizes: sizesArray[0] === 'один размер'
      ? ['one size']
      : sizesArray,
    style: styleValue,
    style_t: styleValue
      ? getTransliterate(styleValue)
      : false,
    structure: data.payload.properties[1].value.replaceAll(';', ',').split(','),
    subcategory: data.payload.breadcrumbs[data.payload.breadcrumbs.length - 3].name,
    subcategory_t: getTransliterate(data.payload.breadcrumbs[data.payload.breadcrumbs.length - 3].name).replaceAll(' ', '-')
  }
}
