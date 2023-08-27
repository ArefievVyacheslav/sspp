const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {
  try {
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
      color: productProto.color && productProto.color.includes(' ')
        ? false
        : productProto.color && productProto.color.includes('/')
          ? productProto.color.split('/')[0].replaceAll('ё', 'е')
          : productProto.color && productProto.color.replaceAll('ё', 'е') || false,
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
      gender: data.productGender === 'Унисекс' ? 'Мужской' : data.productGender,
      installment: true,
      images: productProto.media.photoUrls,
      like: 0,
      link: 'https://www.elyts.ru/product/' + productProto.productId + '/',
      name: productProto.name, shop: 'elyts',
      info: false,
      oldprice: productProto.price.catalog,
      pp: 'admitad',
      price: productProto.price.retail,
      sale: productProto.price.discountRate,
      season: false,
      season_t: false,
      sizes: [...new Set(productProto.sizes
        .filter(sizeObj => sizeObj.isAvailableOnline)
        .map(sizeObj =>
          data?.productType === 'Одежда'
            ? sizeObj?.sizeEur || sizeObj?.sizeRus
            : sizeObj?.sizeRus)
        .filter(size => !!size !== false)
        .map(size => size.toString().trim()
          .replace('2XS', 'XXS')
          .replace('XX', '2X')
          .replace('XXX', '3X')
          .replace('XXXX', '4X')
          .replace('Б/р', 'one size')
          .replace('Без размера', 'one size')
          .replace('/', '-')
          .replace(' 7"', '')
        )
      )].filter(size => size !== '2X' || size !== '1X'),
      style: 'спортивный',
      style_t: getTransliterate('спортивный'),
      structure: false,
      subcategory: data.productGroup,
      subcategory_t: getTransliterate(data.productGroup).replaceAll(' ', '-')
    }
    if (product.subcategory === 'Сумки' || product.subcategory === 'Рюкзаки'
      || product.subcategory === 'Бейсболки' || product.subcategory === 'Гетры'
      || product.subcategory === 'Козырьки' || product.subcategory === 'Кошельки'
      || product.subcategory === 'Мешки для обуви' || product.subcategory === 'Напульсники'
      || product.subcategory === 'Панамы' || product.subcategory === 'Плавки'
      || product.subcategory === 'Повязки' || product.subcategory === 'Шапки'
      || product.subcategory === 'Шарфы' || product.subcategory === 'Перчатки') {
      product.category = 'Аксессуары'
      product.category_t = getTransliterate(product.category)
    }
    if (product.subcategory === 'Ботинки для сноуборда') {
      product.category = 'Обувь'
      product.category_t = getTransliterate(product.category)
    }
    if (product.category === 'Инвентарь') {
      product.category = 'Обувь'
      product.category_t = getTransliterate(product.category)
    }
    if (product.subcategory === 'Весенние' || product.subcategory === 'Классические' || product.subcategory === 'Аксессуары'
      || product.subcategory === 'Мужчинам' || product.subcategory === 'Одежда') return
    if (product.sizes.length === 0) return
    return product
  } catch (e) {
    console.log('Товар', 'https://www.elyts.ru/product/' + productProto.productId + '/', 'не собран')
    return null
  }
}
