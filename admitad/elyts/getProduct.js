const axios = require('axios')
const { JSDOM } = require('jsdom')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


// async function getProduct (productLink, gender, sizes) {
module.exports = async function getProduct (productLink, gender, sizes, imageCatalog) {
  if (!sizes) return null
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, productLink)
    const { data } = await axios.get( ...productOptions )
    const dom = new JSDOM(data).window.document

    const productGender = gender === 'men' ? 'Мужской' : 'Женский'
    let available = +dom.querySelector('.goods-remainder').textContent.split(' ')[0]
    if (isNaN(available)) available = 1
    let brand = dom.querySelector('span[itemprop="brand"]').textContent.toUpperCase()
    if (brand === 'P.A.R.O.S.H.') brand = 'PAROSH'
    if (brand === 'DOLCE&GABBANA') brand = 'DOLCE & GABBANA'
    if (brand === 'Dr. MARTENS') brand = 'DR MARTENS'
    if (brand === 'DR. MARTENS') brand = 'DR MARTENS'
    const breadCrumbs = Array.from(dom.querySelectorAll('span[property="name"]'))
      .map(crumb => crumb.textContent)
    let category = breadCrumbs[0]
    if (category === 'Sale' || category === 'Plus size') category = breadCrumbs[1]
    let subcategory = breadCrumbs[breadCrumbs.length - 1].trim()
    if (subcategory.includes('ые') || subcategory.includes('ие') || subcategory.includes('сс'))
      subcategory = breadCrumbs[breadCrumbs.length - 2]
    if (subcategory === 'Дубленки') subcategory = 'Дублёнки'
    if (subcategory === 'Плащи и тренчи') subcategory = 'Тренчи и плащи'
      subcategory = breadCrumbs[breadCrumbs.length - 2]
    if (category === 'Сумки') {
      category = 'Аксессуары'
      subcategory = 'Сумки'
    }
    if (category === 'Офис' || category === 'Верхняя одежда' || category === 'Футболки и поло') category = 'Одежда'
    const color = dom.querySelector('.b-product__color__value').textContent.replaceAll('ё', 'е').toLowerCase()
    let description
    try { description = dom.querySelector('#goods_description').textContent }
    catch (e) { description = false }
    const nextPurchase = +dom.querySelector('.b-cashback').querySelector('span').textContent.replace(' ', '').replace('руб.', '')
    const oldprice = +dom.querySelector('.price-item').querySelector('del').textContent.trim().replaceAll(' ', '').replace('руб.', '')
    const price = +dom.querySelector('.final-price').textContent.trim().replace(' ', '').replace('руб.', '')
    const sale = +dom.querySelector('.discount-percent').textContent.replace('(-', '').replace('%)', '')
    let name = dom.querySelector('h1[itemprop="name"]').textContent
    name = name.includes(', ') ? name.split(', ')[0] : name
    const images = Array.from(dom.querySelectorAll('.picture-item img')).map(img => img.getAttribute('data-original'))

    const info = {}
    let country = false
    let structure = false
    const params = Array.from(dom.querySelectorAll('.b-title')).map(tag => tag.textContent.trim())
    const values = Array.from(dom.querySelectorAll('.b-value')).map(tag => tag.textContent.trim())
    params.forEach((param, idx) => info[param.replace(':', '')] = values[idx])
    if ('Страна производитель' in info) country = info['Страна производитель']; delete info['Страна производитель']
    if ('Состав' in info) structure = info['Состав']; delete info['Состав']
    structure = structure.includes(', ')
      ? structure.split(', ').reduce((acc, param) => {
        acc[ param.split(' - ')[ 0 ] ] = param.split(' - ')[ 1 ]
        return acc
      }, {})
      : structure

    if (category === 'Одежда' && !sizes.some(size => size.includes('X') || size.includes('S')
      || size.includes('M') || size.includes('L'))) return null
    if (category === 'Аксессуары' && !sizes.some(size => size.includes('X') || size.includes('S')
      || size.includes('M') || size.includes('L'))) sizes = ['one size']
    if (category === 'Одежда')
      sizes = sizes.filter(size => size.includes('X') || size.includes('S') || size.includes('M') || size.includes('L'))
    if (category === 'Обувь')
      sizes = sizes.filter(size => !size.includes('X') && !size.includes('S') && !size.includes('M') && !size.includes('L') && +size < 52)

    const reviews = {}
    if (dom.querySelector('.b-reviews-list.mb-4')) {
      reviews.rating = dom.querySelector('span[itemprop="ratingValue"]').getAttribute('content')
      reviews.reviews = Array.from(dom.querySelectorAll('.b-reviews-item.row'))
        .filter(tag => tag.querySelector('.b-reviews-item__content'))
        .map(review => ({
          rating : review.querySelector('[itemprop="ratingValue"]').getAttribute('content'),
          author : review.querySelector('.b-reviews-item__content').textContent,
          text : review.querySelector('.review-author.mr-1').textContent,
          date : review.querySelector('.review-date').textContent.replace('(','').replace(')','')
        }))
    }
    return {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      available,
      benefit: oldprice - price,
      bonus: { nextPurchase },
      brand,
      brandCountry: false,
      brandCountry_t: false,
      category,
      category_t: getTransliterate(category),
      color,
      color_t: color ? getTransliterate(color) : color,
      country,
      country_t: country ? getTransliterate(country) : country,
      create: new Date,
      delivery: [ 'ru', 'kz' ],
      deliveryPrice: 500,
      description,
      gender: productGender,
      installment: false,
      images,
      imageCatalog,
      like: 0,
      link: productLink,
      name,
      shop: 'elyts',
      info,
      oldprice,
      pp: 'admitad',
      price,
      reviews,
      sale,
      season: false,
      season_t: false,
      sizes,
      style: false,
      style_t: false,
      structure,
      subcategory,
      subcategory_t: getTransliterate(subcategory).replaceAll(' ', '-')
    }
  } catch (e) {
    console.log(e)
    console.log('Товар', productLink, 'не собран')
    return null
  }
}


// (async function (){
//   await getProduct('https://elyts.ru/product/kurtka-liu-jo-875021-blue/', 'Мужской', [ 'XS', 'S', 'M' ])
//   // console.log(await getProduct('https://elyts.ru/product/pidjak-liu-jo-865129-pink/', 'Мужской', [ 'XS', 'S', 'M' ]))
// })()
