const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {

  // получаю данные по товару
  const productOptions = getOptions(null, productProto.link)
  const { data } = await axios.get( ...productOptions )

  productProto.colors.forEach(productColor => colorValue = productColor.xmlId === productProto.xmlId && productColor.name != "" ? productColor.name : false)
  data.payload.properties.forEach(productSeason => seasonValue = productSeason.name === 'Сезон' ? productSeason.value : false)
  data.payload.properties.forEach(productStyle => styleValue = productStyle.name === 'Стиль' ? productStyle.value : false)
  
  const sizesArray = []
  data.payload.sizes.forEach(productSize => productSize.online === true
    ? productSize.second !== ''
      ? sizesArray.push(productSize.second.split(/[\/-]+/))
      : sizesArray.push(productSize.main.split(/[\/-]+/))
    : false)

  const notUniqueSizes = []
  sizesArray.forEach(size => {
    notUniqueSizes.push(...size)
  })

  const uniqueSizes = [ ...new Set(notUniqueSizes)]
  uniqueSizes.forEach(function (size, ind) {
    uniqueSizes[ind] = size.replaceAll('XXXXL', '4XL').replaceAll('XXXL', '3XL').replaceAll('XXL', '2XL')
  })

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
    images: productProto.images.map(image => image.default.webp.src2x),
    like: 0,
    link: 'https://stockmann.ru' + productProto.link,
    name: productProto.name + ', ' + productProto.brand,
    shop: 'stockmann',
    info: data.payload.properties.length >= 3
      ? data.payload.properties.slice(2).map(property => property.name + ': ' + property.value)
      : false,
    oldprice: productProto.price,
    pp: 'advcake',
    price: productProto.priceDiscount,
    sale: productProto.discount,
    season: seasonValue,
    season_t: seasonValue
      ? getTransliterate(seasonValue)
      : false,
    sizes: uniqueSizes[0] === 'один размер'
      ? ['one size']
      : uniqueSizes,
    style: styleValue,
    style_t: styleValue
      ? getTransliterate(styleValue)
      : false,
    structure: data.payload.properties[1].value.replaceAll(';', ',').split(','),
    subcategory: data.payload.breadcrumbs[data.payload.breadcrumbs.length - 3].name,
    subcategory_t: getTransliterate(data.payload.breadcrumbs[data.payload.breadcrumbs.length - 3].name).replaceAll(' ', '-')
  }
}
