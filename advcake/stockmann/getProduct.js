const axios = require('axios')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productProto) {
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, productProto.link)
    const { data } = await axios.get( ...productOptions )

    if (!data || !data.payload) return
    productProto.colors.forEach(productColor => colorValue = productColor.xmlId === productProto.xmlId && productColor.name !== '' ? productColor.name : false)
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

    const sizeConversion = {
      3:34.5,3.5:35,4:35.5,4.5:36,5:36.5,5.5:37,6:37.5,6.5:38,7:39,7.5:40,8:40.5,8.5:41,
      9:42,9.5:43,10:43.5,10.5:44,11:45,11.5:46,12:46.5,12.5:47,13:47.5,13.5:48,14:48.5,
      14.5:49,15:50,15.5:51,16:52,16.5:53,17:53.5,17.5:54,18:55
    }
    const convertSize = usSize => sizeConversion[+usSize.replace(',', '.')] || usSize
    const replaceOneSize = size => size === 'один размер' || size === 'ONESI' || size === 'ONESIZE'
      || size === 'ONE SIZE' || size === 'ONE' || size === 'NR' || size === 'NOSIZE' || size === '1'
      || size.includes(' см') || size.includes(' см')
      || size === 'OS' || size === 'OSO' || size === 'NO SIZE' || size === 'x' || size === '000'
      ? 'one size'
      : size

    const uniqueSizes = [ ...new Set(notUniqueSizes)].map(convertSize).map(replaceOneSize)
    uniqueSizes.forEach(function (size, ind) {
      uniqueSizes[ind] = size.replaceAll('XXXXL', '4XL').replaceAll('XXXL', '3XL').replaceAll('XXL', '2XL')
    })

    const product = {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: productProto.price - productProto.priceDiscount,
      brand: productProto.brand.toUpperCase(),
      brandCountry: false,
      brandCountry_t: false,
      category: data.payload.breadcrumbs[2].name === 'Инвентарь'
        ? 'Аксессуары'
        : data.payload.breadcrumbs[2].name,
      category_t: data.payload.breadcrumbs[2].name === 'Инвентарь'
        ? 'Аксессуары'
        : getTransliterate(data.payload.breadcrumbs[2].name),
      color: colorValue && !colorValue.includes(' ')
      ? colorValue.replaceAll('ё', 'е').replaceAll(';', '-')
      : false,
      color_t: colorValue && !colorValue.includes(' ')
        ? getTransliterate(colorValue.replaceAll('ё', 'е').replaceAll(';', '-'))
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
      name: productProto.name + ' ' + productProto.brand,
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
    if (product.subcategory === 'Весенние' || product.subcategory === 'Классические' || product.subcategory === 'Аксессуары'
      || product.subcategory === 'Мужчинам' || product.subcategory === 'Женщинам' || product.subcategory === 'Одежда'
      || product.subcategory === 'Обувь') return
    if (product.sizes.length === 0) return
    if (product.category.length > 20) return
    if (product.category.includes('чин') || product.category.includes('щин') || product.category.includes('г')
      || product.category.includes('л') || product.category.includes('нн')
      || product.category.includes('з') || product.category.includes('до')) return
    return product
  } catch (e) {
    console.log('Товар', 'https://stockmann.ru' + productProto.link, 'не удалось собрать!')
    return null
  }
}
