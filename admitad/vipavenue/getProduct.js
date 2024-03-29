const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')

module.exports = async function getProduct (productProto) {
  try {
    let sizeAvailable
    if (productProto.offers.filter(offer => offer.is_available).length === 0) return null
    else sizeAvailable = productProto.offers.filter(offer => offer.is_available).map(size => size.size.code)
    const nextPurchase = productProto.offers[0].bonus_points_after_ordering
    // получаю sizes по товару
    const productOptions = getOptions(null, productProto.code)
    const size = await axios.post( ...productOptions )
    const sizes = []
    size.data.sizes.filter(size => sizeAvailable.includes(size.code)).forEach(sizeData => sizeData.alternative_sizes.forEach(altSize => {
      if (altSize.size_chart.code === 'INT')
        sizes.push(altSize.name.replaceAll('XXL', '2XL').replaceAll('XXS', '2XS').replace('One size', 'one size'))
    }))
    // Разбор категорий
    let category = productProto.section_path[0].name
    if (category === 'Сумки') category = 'Аксессуары'
    if (category === 'Нижнее белье') category = 'Одежда'
    let subcategory = productProto.section_path[productProto.section_path.length - 1].name
    if ((subcategory.includes('ые') || subcategory.includes('ие')) && !subcategory.includes('уборы'))
      subcategory = productProto.section_path[productProto.section_path.length - 2].name
    if (subcategory === 'Высокая посадка') subcategory = 'Джинсы с высокой посадкой'
    if (subcategory === 'Леггинсы') subcategory = 'Легинсы'
    if (subcategory === 'Миди') subcategory = 'Юбки миди'
    if (subcategory === 'Мини') subcategory = 'Юбки мини'
    if (subcategory === 'Брюки-карго') subcategory = 'Брюки карго'
    if (subcategory === 'Аксессуары') return null
    let brand = productProto.brand.name === 'BOGNER FIRE + ICE' ? 'BOGNER' : productProto.brand.name
    if (brand === 'P.A.R.O.S.H.') brand = 'PAROSH'
    if (brand === 'DOLCE&GABBANA') brand = 'DOLCE & GABBANA'
    if (brand === 'ADIDAS&PARLEY') brand = 'ADIDAS & PARLEY'
    if (brand === 'VASSA&CO') brand = 'VASSA & CO'
    if (brand === 'VASSA&CO PIN CODE') brand = 'VASSA & CO'
    if (brand === 'MICHAEL MICHAEL KORS') brand = 'MICHAEL KORS'
    if (brand === 'STELLA MCCARTNEY SPORT') brand = 'STELLA MCCARTNEY'
    if (brand === 'UGG AUSTRALIA') brand = 'UGG'
    return {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: productProto.price_not_discount - productProto.price,
      bonus: { nextPurchase },
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
