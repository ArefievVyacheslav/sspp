const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {

  // получаю данные по товару
  const productOptions = getOptions(null, productProto.code)
  const { data } = await axios.post( ...productOptions )
  console.log(data.data.section_path[productProto.section_path.length - 1])

  return {
    id: Math.floor(Math.random() * 9e9) + 1e9,
    age: 'Взрослый',
    benefit: productProto.price_not_discount - productProto.price,
    brand: productProto.brand.name,
    brandCountry: false,
    brandCountry_t: false,
    category: productProto.section_path[0].name,
    category_t: getTransliterate(productProto.section_path[0].name),
    color: data.data.colors[0].name != ""
      ? data.data.colors[0].name.toLowerCase().replaceAll('ё', 'е')
      : false,
    color_t: data.data.colors[0].name != ""
      ? getTransliterate(data.data.colors[0].name.toLowerCase().replaceAll('ё', 'е'))
      : false,
    country: data.data.country.name != ""
      ? data.data.country.name.replaceAll('ё', 'е')
      : false,
    country_t: data.data.country.name != ""
      ? getTransliterate(data.data.country.name.replaceAll('ё', 'е'))
      : false,
    create: new Date,
    delivery: ['ru', 'rb', 'kz', 'am', 'kg', 'az', 'md', 'tj', 'uz', 'tm'],
    deliveryPrice: 500,
    // // Уточнить по поводу \n
    // // description: productProto.description != ""
    // //   ? productProto.description
    // //   : false,
    gender: productProto.gender_id === 36360 || productProto.gender_id === 52366
      ? 'Мужской'
      : 'Женский',
    installment: false,
    images: data.data.media_files.map(image => image.url),
    like: 0,
    link: 'https://vipavenue.ru' + productProto.url,
    name: productProto.full_name,
    shop: 'vipavenue',
    info: false,
    oldprice: productProto.price_not_discount,
    pp: 'admitad',
    price: productProto.price,
    sale: productProto.discount_percent,
    season: false,
    season_t: false,
    // // sizes: productProto.sizes
    // //   .filter(sizeObj => sizeObj.isAvailableOnline)
    // //   .map(sizeObj =>
    // //     data?.productType === 'Одежда'
    // //       ? sizeObj?.sizeEur || sizeObj?.sizeRus
    // //       : sizeObj?.sizeRus)
    // //   .filter(size => !!size !== false)
    // //   .map(size => size.toString().trim()
    // //     .replace('XX', '2X')
    // //     .replace('XXX', '3X')
    // //     .replace('XXXX', '4X')),
    style: false,
    style_t: false,
    structure: [ productProto.consist ],
    subcategory: data.data.section_path[productProto.section_path.length - 1],
    // subcategory_t: getTransliterate(data.data.section_path[productProto.section_path.length - 1])
  }
}