const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {

  // получаю данные по товару
  const productOptions = getOptions(null, productProto.productId)
  const { data } = await axios.get( ...productOptions )

  const product = {
    id: Math.floor(Math.random() * 9e9) + 1e9,
    age: 'Взрослый',
    benefit: productProto.price.discountAmount,
    brand: data.productBrand.toUpperCase(),
    brandCountry: false,
    brandCountry_t: false,
    category: data.productType,
    category_t: getTransliterate(data.productType),
    color: productProto.color && productProto.color.includes('/')
      ? productProto.color.split('/')[0]
      : productProto.color || false,
    color_t: productProto.color && productProto.color.includes('/')
      ? getTransliterate(productProto.color.split('/')[0] || '')
      : productProto.color
        ? getTransliterate(productProto.color.replaceAll(' ', '-'))
        : false,
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
    sizes: productProto.sizes
      .filter(sizeObj => sizeObj.isAvailableOnline)
      .map(sizeObj =>
        data?.productType === 'Одежда'
          ? sizeObj?.sizeEur || sizeObj?.sizeRus
          : sizeObj?.sizeRus)
      .filter(size => !!size !== false)
      .map(size => size.toString().trim()
        .replace('XX', '2X')
        .replace('XXX', '3X')
        .replace('XXXX', '4X')
        .replace('Б/р', 'one size')
        .replace('/', '-')
      ),
    style: 'Спортивный стиль',
    style_t: getTransliterate('Спортивный стиль'),
    structure: false,
    subcategory: data.productGroup,
    subcategory_t: getTransliterate(data.productGroup).replaceAll(' ', '-')
  }
  if (product.subcategory === 'Сумки'
    || product.subcategory === 'Рюкзаки') {
    product.category = 'Аксессуары'
    product.category_t = getTransliterate(product.category)
  }
  if (product.sizes.length === 0) return
  return product
}
