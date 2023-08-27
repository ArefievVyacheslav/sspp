const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')

module.exports = async function getProduct (productProto) {
  try {
    // получаю sizes по товару
    const productOptions = getOptions(null, productProto.code)
    const size = await axios.post( ...productOptions )
    const sizes = []
    size.data.sizes.forEach(sizeData => sizeData.alternative_sizes.forEach(altSize => {
      if (altSize.size_chart.code === 'INT') sizes.push(altSize.name.replaceAll('XXL', '2XL').replaceAll('XXS', '2XS'))
    }))
    // Разбор категорий
    let category = productProto.section_path[0].name
    if (category === 'Сумки') category = 'Аксессуары'
    if (category === 'Нижнее белье') category = 'Одежда'
    let subcategory = productProto.section_path[productProto.section_path.length - 1].name
    if (subcategory.includes('ые') || subcategory.includes('ие'))
      subcategory = productProto.section_path[productProto.section_path.length - 2].name
    if (subcategory === 'Высокая посадка') subcategory = 'Джинсы с высокой посадкой'
    if (subcategory === 'Леггинсы') subcategory = 'Легинсы'
    if (subcategory === 'Аксессуары') return null
    let brand = productProto.brand.name === 'BOGNER FIRE + ICE' ? 'BOGNER' : productProto.brand.name
    if (brand === 'P.A.R.O.S.H.') brand = 'PAROSH'
    return {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: productProto.price_not_discount - productProto.price,
      brand,
      brandCountry: false,
      brandCountry_t: false,
      category,
      category_t: getTransliterate(category),
      color: false,
      color_t: false,
      country: false,
      country_t: false,
      create: new Date,
      delivery: ['ru', 'rb', 'kz', 'am', 'kg', 'az', 'md', 'tj', 'uz', 'tm'],
      deliveryPrice: 500,
      description: productProto.description !== ""
        ? productProto.description.replaceAll('\n', ' ').replaceAll('-', '')
        : false,
      gender: productProto.gender_id === 36360 || productProto.gender_id === 52366
        ? 'Мужской'
        : 'Женский',
      installment: false,
      images: productProto.media_files_small.map(image => image.url),
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
      sizes: [ ...new Set(sizes)],
      style: false,
      style_t: false,
      structure: productProto.consist.includes(', ')
        ? productProto.consist.split(', ')
        : [ productProto.consist ],
      subcategory,
      subcategory_t: getTransliterate(subcategory)
    }
  }
  catch (e) {
    console.log('Запрос на товар упал!')
  }
}
