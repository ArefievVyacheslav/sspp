const axios = require('axios')
const { JSDOM } = require('jsdom')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (gender, productLink) {
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, productLink)
    const { data } = await axios.get( ...productOptions )
    const dom = new JSDOM(data).window.document
    const article = dom.querySelector('span[itemprop="mpn"]').textContent
    let available = +dom.querySelector('.goods-remainder').textContent.split(' ')[0]
    if (isNaN(available)) available = 1
    let brand = dom.querySelector('span[itemprop="brand"]').textContent
    if (brand === 'P.A.R.O.S.H.') brand = 'PAROSH'
    const breadCrumbs = Array.from(dom.querySelectorAll('span[property="name"]'))
      .map(crumb => crumb.textContent)
    const category = breadCrumbs[0]
    let subcategory = breadCrumbs[breadCrumbs.length - 1]
    if (subcategory.includes('ые') || subcategory.includes('сс'))
      subcategory = breadCrumbs[breadCrumbs.length - 2]

    const color = dom.querySelector('.b-product__color__value').textContent.replaceAll('ё', 'е').toLowerCase()
    let description
    try { description = dom.querySelector('#goods_description').textContent }
    catch (e) { description = false }
    const cashback = +dom.querySelector('.b-cashback').querySelector('span').textContent.replace(' ', '').replace('руб.', '')
    const oldprice = +dom.querySelector('.price-item').querySelector('del').textContent.trim().replaceAll(' ', '').replace('руб.', '')
    const price = +dom.querySelector('.final-price').textContent.trim().replace(' ', '').replace('руб.', '')
    const sale = +dom.querySelector('.discount-percent').textContent.replace('(-', '').replace('%)', '')
    let name = dom.querySelector('h1[itemprop="name"]').textContent
    name = name.includes(', ') ? name.split(', ')[0] : name
    const images = Array.from(dom.querySelectorAll('.picture-item img')).map(img => img.getAttribute('data-original'))
    const sizes = Array.from(
      Array.from(dom.querySelectorAll('.b-size-select__pane')
      )[0].querySelectorAll('option')).map(size => size.textContent
      .replace(' (в резерве)', '').replace(' / ', '-').replace(' INT', ''))

    const info = {}
    let country = false
    let structure = false
    const params = Array.from(dom.querySelectorAll('.b-title')).map(tag => tag.textContent.trim())
    const values = Array.from(dom.querySelectorAll('.b-value')).map(tag => tag.textContent.trim())
    params.forEach((param, idx) => info[param.replace(':', '')] = values[idx])
    if ('Страна производитель' in info) country = info['Страна производитель']; delete info['Страна производитель']
    if ('Состав' in info) structure = info['Состав']; delete info['Состав']
    return {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      article,
      available,
      benefit: oldprice - price,
      bonus: { cashback },
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
      gender,
      installment: false,
      images,
      like: 0,
      link: productLink,
      name,
      shop: 'elyts',
      info,
      oldprice,
      pp: 'admitad',
      price,
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
