const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {

  // получаю данные по товару
  const productOptions = getOptions(null, productProto.productId)
  const { data } = await axios.get( ...productOptions )

  return {
    id: Math.floor(Math.random() * 9e9) + 1e9,
    age: 'Взрослый',
    benefit: productProto.price.discountAmount,
    brand: data.productBrand.toUpperCase(),
    brandCountry: false,
    brandCountry_t: false,
    category: data.productType,
    category_t: getTransliterate(data.productType),
    color: productProto.color.includes('/')
      ? productProto.color.split('/')[0]
      : productProto.color,
    color_t: getTransliterate(productProto.color.includes('/')
      ? productProto.color.split('/')[0]
      : productProto.color).replaceAll(' ', '-'),
    country: false,
    country_t: false,
    create: new Date,
    delivery: ['ru', 'rb', 'kz', 'am', 'kg'],
    deliveryPrice: false,
    description: false,
    gender: data.productGender,
    installment: true,
    images: productProto.media.photoUrls,
    like: 0,
    link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/',
    name: productProto.name, shop: 'sportmaster',
    info: false,
    oldprice: productProto.price.catalog,
    pp: 'admitad',
    price: productProto.price.retail,
    sale: productProto.price.discountRate,
    season: false,
    season_t: false,
    sizes: productProto.sizes.map(sizeObj =>
      data.productType === 'Одежда'
        ? sizeObj?.sizeEur
        : sizeObj.sizeRus),
    style: 'Спортивный стиль',
    style_t: getTransliterate('Спортивный стиль'),
    structure: false,
    subcategory: data.productGroup,
    subcategory_t: getTransliterate(data.productGroup).replaceAll(' ', '-')
  }
}
