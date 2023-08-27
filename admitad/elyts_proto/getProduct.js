const axios = require('axios')
const { JSDOM } = require('jsdom')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')


module.exports = async function getProduct (productLink) {
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, productLink)
    const { data } = await axios.get( ...productOptions )
    const dom = new JSDOM(data).window.document

    const breadCrumbs = Array.from(dom.querySelectorAll('span[property="name"]'))
      .map(crumb => crumb.textContent)
    const category = breadCrumbs[0]
    const subcategory = breadCrumbs[breadCrumbs.length - 1]

    const oldprice = +dom.querySelector('.price-item').querySelector('del').textContent.trim().replaceAll(' ', '').replace('руб.', '')
    const price = +dom.querySelector('.final-price').textContent.trim().replace(' ', '').replace('руб.', '')
    const cashback = +dom.querySelector('.b-cashback').querySelector('span').textContent.replace(' ', '').replace('руб.', '')
    console.log(cashback)

    const product = {
      // id: Math.floor(Math.random() * 9e9) + 1e9,
      // age: 'Взрослый',
      benefit: oldprice - price,
      brand: dom.querySelector('span[itemprop="brand"]').textContent,
      // brandCountry: false,
      // brandCountry_t: false,
      category,
      // category_t: getTransliterate(category),
      // color: productProto.color && productProto.color.includes(' ')
      //   ? false
      //   : productProto.color && productProto.color.includes('/')
      //     ? productProto.color.split('/')[0].replaceAll('ё', 'е')
      //     : productProto.color && productProto.color.replaceAll('ё', 'е') || false,
      // color_t: productProto.color && productProto.color.includes('/')
      //   ? getTransliterate(productProto.color.split('/')[0] || '')
      //   : productProto.color
      //     ? getTransliterate(productProto.color.replaceAll(' ', '-'))
      //     : false,
      // country: false,
      // country_t: false,
      // create: new Date,
      // delivery: ['ru', 'rb', 'kz', 'am', 'kg'],
      // deliveryPrice: false,
      // description: false,
      // gender: data.productGender === 'Унисекс' ? 'Мужской' : data.productGender,
      // installment: true,
      // images: productProto.media.photoUrls,
      // like: 0,
      // link: 'https://www.sportmaster.ru/product/' + productProto.productId + '/',
      // name: productProto.name,
      // shop: 'sportmaster',
      // info: false,
      oldprice,
      // pp: 'admitad',
      price,
      sale: +dom.querySelector('.discount-percent').textContent.replace('(-', '').replace('%)', ''),
      // season: false,
      // season_t: false,
      // sizes: [...new Set(productProto.sizes
      //   .filter(sizeObj => sizeObj.isAvailableOnline)
      //   .map(sizeObj =>
      //     data?.productType === 'Одежда'
      //       ? sizeObj?.sizeEur || sizeObj?.sizeRus
      //       : sizeObj?.sizeRus)
      //   .filter(size => !!size !== false)
      //   .map(size => size.toString().trim()
      //     .replace('2XS', 'XXS')
      //     .replace('XX', '2X')
      //     .replace('XXX', '3X')
      //     .replace('XXXX', '4X')
      //     .replace('Б/р', 'one size')
      //     .replace('Без размера', 'one size')
      //     .replace('/', '-')
      //     .replace(' 7"', '')
      //   )
      // )].filter(size => size !== '2X' || size !== '1X'),
      // style: 'спортивный',
      // style_t: getTransliterate('спортивный'),
      // structure: false,
      subcategory,
      // subcategory_t: getTransliterate(subcategory).replaceAll(' ', '-')
    }
    return product
  } catch (e) {
    console.log('Товар', productLink, 'не собран')
    return null
  }
}
