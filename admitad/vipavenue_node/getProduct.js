const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')
const getSizes = require('./getSizesOptions')

module.exports = async function getProduct (productProto) {
  try {

    // получаю данные по товару
    const productOptions = getOptions(null, productProto.code)
    const { data } = await axios.post( ...productOptions )
    
    // Получение размеров через запрос
    const sizesOptions = getSizes(data.data.code)
    let sizes = []
    try {
      const resSizes = await axios.post( ...sizesOptions )
      for (var size of resSizes.data.sizes) {
        for (var alt_size of size.alternative_sizes) {
            if (alt_size.size_chart.code === 'INT') {
              sizes.push(alt_size.name.replaceAll('XXL', '2XL').replaceAll('XXS', '2XS'))
            }
        }
      }
    }
    // Если запрос падает то таблицы размеров для товара нет
    catch (e) {
      sizes = [ 'one size' ]
    }
    let uniqueSizes = [ ...new Set(sizes)]

    // Разбор подкатегорий
    let subcategory = data.data.section_path[1].name
    if (subcategory === 'Верхняя одежда' || subcategory === 'Пляжная одежда' || subcategory === 'Трикотаж' || subcategory === 'Спортивная одежда' || subcategory === 'Головные уборы') {
      subcategory = data.data.section_path[2].name;
    }
    if (subcategory === 'Блузы и рубашки') {
        subcategory = subcategory.split('и')[0];
    }

    // Разбор категорий
    let category = productProto.section_path[0].name
    if (category === 'Сумки') {
        category = 'Аксессуары';
    }
    if (category === 'Нижнее белье') {
        category = 'Одежда';
    }

    return {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: productProto.price_not_discount - productProto.price,
      brand: productProto.brand.name,
      brandCountry: false,
      brandCountry_t: false,
      category: category,
      category_t: getTransliterate(category),
      color: data.data.colors.length != 0
        ? data.data.colors[0].name !== ""
          ? data.data.colors[0].name.toLowerCase().replaceAll('ё', 'е')
          : false
        : false,
      color_t: data.data.colors.length != 0
        ? data.data.colors[0].name !== ""
          ? getTransliterate(data.data.colors[0].name.toLowerCase().replaceAll('ё', 'е'))
          : false
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
      description: productProto.description !== ""
        ? productProto.description.replaceAll('\n', '').replaceAll('-', '')
        : false,
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
      sizes: uniqueSizes,
      style: false,
      style_t: false,
      structure: [ productProto.consist ],
      subcategory: subcategory,
      subcategory_t: getTransliterate(subcategory)
    }
  }
  catch (e) {
    console.log('Запрос на товар упал!')
  }
}