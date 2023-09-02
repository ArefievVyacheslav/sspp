const axios = require('axios')
const { JSDOM } = require('jsdom')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')
const iconv = require('iconv-lite');


module.exports = async function getProduct (productLink, gender) {
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, productLink)
    const productRes = await axios.post( ...productOptions )
    const ruHtmlProduct = iconv.decode(productRes.data, "win1251")
    const dom = new JSDOM(ruHtmlProduct).window.document

    const breadCrumbs = Array.from(dom.querySelectorAll('span[itemprop="name"]'))
      .map(crumb => crumb.textContent.toLowerCase())

    let category;
    breadCrumbs[2].indexOf('одежда') !== -1
      ? category = 'Одежда'
      : breadCrumbs[2].indexOf('обувь') !== -1
        ? category = 'Обувь'
        : category = 'Аксессуары'

    let subcategory = breadCrumbs[3].toLowerCase().replaceAll('мужской', '').replaceAll('мужская', '').replaceAll('мужские', '')
      .replaceAll('женский', '').replaceAll('женская', '').replaceAll('женские', '').trim()
    subcategory= subcategory[0].toUpperCase() + subcategory.slice(1)
    
    const brand = dom.querySelector('meta[itemprop=brand]').getAttribute('content').toUpperCase()

    const attributes = dom.querySelector('dl.attributes')
    colors = attributes.querySelectorAll('dd')

    const imageLinks = Array.from(dom.querySelector('section.desktop_images').querySelectorAll('a'))
      .map(link => link.href)

    const fullNameArr = dom.querySelector('header h1[itemprop="name"]').textContent.split(' ')
    let name = []
    function checkArr(fullName) {
        for (let word of fullName) {
          if (/^[0-9А-ЯЁ]+$/i.test(word)) name.push(word);
        }
      }
    checkArr(fullNameArr)
    name.push(brand)

    let infoDetails = dom.querySelector('div.details').querySelector('meta[itemprop="description"]').getAttribute("content").split('\n')

    let sale = parseInt(dom.querySelector('div.product-card__label.product-card__label--sale').textContent)
    if (sale < 0) {
        sale = sale * -1;
      }

    let sizes = [];
    let labels = Array.from(dom.querySelector('div.option.text').querySelectorAll('.options-item.js-ab-prinfo-add-popup-size-hover'))
    for (let label of labels) {
        if (label.getAttribute('class') == 'options-item js-ab-prinfo-add-popup-size-hover ') sizes.push(label);
      }
    sizes = Array.from(sizes).map(size => size.querySelector('span').textContent);

    const oldprice = parseInt(dom.querySelector('div.prices').querySelector('span.price_obsolete').textContent)
    const price = parseInt(dom.querySelector('div.prices').querySelector('span[itemprop="price"]').textContent)

    let structure = dom.querySelector('div.composition-info')
    // if (structure) structure = structure.textContent.split('/')
    if (structure) {
        structure = structure.textContent.split('/');
        structure[0] = structure[0].split(':')[1];
        for (let num in structure) {
            structure[num] = structure[num].trim();
          };
      } else {
        structure = false;
      }
    // structure[0] = structure[0].split(':')[1]
    // for (let num in structure) {
    //     structure[num] = structure[num].trim();
    //   }

    const product = {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: oldprice - price,
      brand,
      brandCountry: false,
      brandCountry_t: false,
      category,
    //   category_t: getTransliterate(category),
      color: colors[colors.length - 1].textContent,
      color_t: getTransliterate(colors[colors.length - 1].textContent),
      country: false,
      country_t: false,
      create: new Date,
      delivery: ['ru'],
      deliveryPrice: false,
      description: false,
      gender: gender === 'men'
        ? 'Мужской'
        : 'Женский',
      installment: true,
      images: imageLinks,
      like: 0,
      link: productLink,
      name: name.join(' '),
      shop: 'brd',
      info: infoDetails,
      oldprice: oldprice,
      pp: 'admitad',
      price: price,
      sale: sale,
      season: false,
      season_t: false,
      sizes: sizes[0] == ''
        ? [ 'one size' ]
        : sizes,
      style: false,
      style_t: false,
      structure: structure,
      subcategory,
      subcategory_t: getTransliterate(subcategory),
    }
    return product
  } catch (e) {
    console.log('Товар', productLink, 'не собран', e)
    return null
  }
}
