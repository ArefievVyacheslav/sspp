const axios = require('axios')
const { JSDOM } = require('jsdom')
const getOptions = require('./getOptions')
const getTransliterate = require('./getTransliterate')
const convertSizes = require('../../utils/getSizesBrd');
const iconv = require('iconv-lite');


module.exports = async function getProduct (productLink, gender, imageCatalog) {
  try {
    // получаю данные по товару
    const productOptions = getOptions(null, null, productLink)
    const productRes = await axios.post( ...productOptions )
    const ruHtmlProduct = iconv.decode(productRes.data, "win1251")
    const dom = new JSDOM(ruHtmlProduct).window.document
    if (dom.querySelector('div.last-item-list') === null && dom.querySelector('span.last-item-text').textContent === 'Нет в наличии.') throw new Error('Во время парсинга товар перестал быть в наличии');

    const breadCrumbs = Array.from(dom.querySelector('nav[class="breadcrumbs"]').querySelectorAll('span[itemprop="name"]'))
      .map(crumb => crumb.textContent.toLowerCase())

    const imageLinksArray = Array.from(dom.querySelector('section.desktop_images').querySelectorAll('a'))
      .map(link => link.href)

    const fullNameArr = dom.querySelector('header h1[itemprop="name"]').textContent.split(' ')
    // функция выбирает из массива слова на кириллице и без символа "-"
    let nameArrayCyrillic = fullNameArr.reduce((acc, word) => {
      if (/^[А-ЯЁ-]+$/i.test(word)) acc.push(word)
      return acc
    }, [])

    let category;
    let subcategory;
    if (breadCrumbs.length > 2) {
      breadCrumbs[2].indexOf('одежда') !== -1
      ? category = 'Одежда'
      : breadCrumbs[2].indexOf('обувь') !== -1
        ? category = 'Обувь'
        : category = 'Аксессуары';
      subcategory = breadCrumbs[3].toLowerCase().replaceAll('мужской', '').replaceAll('мужская', '').replaceAll('мужские', '')
        .replaceAll('женский', '').replaceAll('женская', '').replaceAll('женские', '').trim()
      subcategory = subcategory[0].toUpperCase() + subcategory.slice(1)
    } else {
      category = 'Одежда'
      subcategory = nameArrayCyrillic.join(' ').toLowerCase().replaceAll('мужской', '').replaceAll('мужская', '').replaceAll('мужские', '')
        .replaceAll('женский', '').replaceAll('женская', '').replaceAll('женские', '').trim()
      subcategory = subcategory[0].toUpperCase() + subcategory.slice(1)
    }
    subcategory = subcategory.replaceAll('  ', ' ').trim()
    if (subcategory === 'Ботинки сноуборд') subcategory = 'Ботинки для сноуборда'
    if (subcategory === 'Ботинки для сноуборда') category = 'Обувь'
    if (subcategory === 'Головные уборы для сноубординга') category = 'Аксессуары'
    if (subcategory === 'Леггинсы') subcategory = 'Легинсы'
    if (subcategory === 'Спортивные леггинсы') subcategory = 'Легинсы'
    if (subcategory === 'Спортивные шорты') subcategory = 'Шорты'
    if (subcategory === 'Сноубордические перчатки') subcategory = 'Сноубордические перчатки и варежки'
    if (subcategory === 'Сноубордические перчатки и варежки') category = 'Аксессуары'
    if (subcategory === 'Флисовая толстовка на молнии') subcategory = 'Флисовые толстовки'
    if (subcategory === 'Флисовая толстовка') subcategory = 'Флисовые толстовки'
    if (subcategory === 'Толстовки, худи, свитшоты') subcategory = 'Толстовки'
    if (subcategory === 'Шлепанцы (сланцы)') subcategory = 'Сланцы'
    if (subcategory === 'Рашгарды для серфинга и плавания') subcategory = 'Рашгарды для плавания и серфинга'
    if (subcategory === 'Бордшорты (шорты для плавания)') subcategory = 'Бордшорты'
    if (subcategory === 'Бордшорты') category = 'Одежда'
    if (subcategory === 'Гидрокостюмы') category = 'Одежда'
    if (subcategory === 'Носки') category = 'Одежда'
    if (subcategory === 'Плавательные шорты') category = 'Одежда'
    if (subcategory === 'Гидрообувь') category = 'Обувь'


    let brand = dom.querySelector('meta[itemprop=brand]').getAttribute('content').toUpperCase()
    nameArrayCyrillic.push(brand)

    let infoDetails = dom.querySelector('div.details').querySelector('meta[itemprop="description"]').getAttribute("content").split('\n')
      .map(infoElement => infoElement.trim())

    let sale = parseInt(dom.querySelector('div.product-card__label.product-card__label--sale').textContent)
    if (sale < 0) sale = sale * -1

    let sizes = [];
    const options = dom.querySelector('div.option.text')
    let labels = Array.from(options.querySelectorAll('.options-item.js-ab-prinfo-add-popup-size-hover'));
    for (let label of labels) {
      if (label.getAttribute('class') === 'options-item js-ab-prinfo-add-popup-size-hover ') sizes.push(label);
    }
    sizes = Array.from(sizes).map(size => size.querySelector('span').textContent.replaceAll('W', '').replaceAll('/', '-').replaceAll(' ', '').replace(/\u00A0/g, "").replaceAll('-L', '-'));

    const oldprice = parseInt(dom.querySelector('div.prices').querySelector('span.price_obsolete').textContent)
    const price = parseInt(dom.querySelector('div.prices').querySelector('span[itemprop="price"]').textContent)

    let structure = dom.querySelector('div.composition-info')
    if (structure) {
      structure = structure.textContent.split('/');
      structure[0] = structure[0].split(':')[1];
      structure.forEach(num => structure[num] = structure[num] ? structure[num].trim() : 'Неизвестно')
    } else structure = false

    if (sizes[0] === '') sizes = [ 'one size' ]
    for (let sizeNum in  sizes) {
      if (sizes[sizeNum] === 'OneSize' || sizes[sizeNum] === '1SZ' || sizes[sizeNum] === 'U') sizes = [ 'one size' ];
      if ((category === 'Обувь') && (sizes[sizeNum].indexOf('H') !== -1 || sizes[sizeNum].indexOf('Н') !== -1)) {
        sizes[sizeNum] = sizes[sizeNum].replaceAll('H', '').replaceAll('Н', '').split('-');
        sizes[sizeNum] = Math.max(...sizes[sizeNum]).toString();
      }
      if ((brand === 'DC SHOES' && subcategory === "Брюки") && (sizes[sizeNum].indexOf('-') !== -1)) sizes[sizeNum] = sizes[sizeNum].split('-')[0];
      if (subcategory === 'Платья') sizes[sizeNum] = sizes[sizeNum].split('-')[0];
      if (brand === 'ELEMENT' && subcategory === "Футболки, поло, лонгсливы") sizes[sizeNum] = sizes[sizeNum].split('-')[0];
      if (category === 'Одежда') sizes[sizeNum] = sizes[sizeNum].replaceAll('XXXX', '4X').replaceAll('XXX', '3X').replaceAll('XX', '2X');
      // skip products with invalid sizes
      if ((parseInt(sizes[sizeNum]) && parseInt(sizes[sizeNum]) > 100)) return
      if (!(/\w+$/i.test(sizes[sizeNum]))) return
    }

    let generalRating;
    const reviewsList = [];
    const hasReviews = dom.querySelector('div.totals')
    if (hasReviews !== null) {
      generalRating = hasReviews.querySelector('b').textContent;
      for (let review of dom.querySelector('div.reviews-list').querySelectorAll('div.review')) {
        if (review.querySelector('meta[itemprop="ratingValue"]') !== null) {
          const reviews = {
            rating: review.querySelector('meta[itemprop="ratingValue"]').getAttribute('content'),
            author: review.querySelector('div.author').querySelector('span[itemprop="name"]').textContent,
            text: review.querySelector('div.review-body').querySelector('p').textContent,
            date: review.querySelector('div.date').textContent
          }
          reviewsList.push(reviews)
        }
      }
    }

    const product = {
      id: Math.floor(Math.random() * 9e9) + 1e9,
      age: 'Взрослый',
      benefit: oldprice - price,
      brand,
      brandCountry: false,
      brandCountry_t: false,
      category,
      category_t: getTransliterate(category),
      color: dom.querySelector('dl.attributes').querySelectorAll('dd')[dom.querySelector('dl.attributes').querySelectorAll('dd').length - 1].textContent,
      color_t: getTransliterate(dom.querySelector('dl.attributes').querySelectorAll('dd')[dom.querySelector('dl.attributes').querySelectorAll('dd').length - 1].textContent),
      country: false,
      country_t: false,
      create: new Date,
      delivery: ['ru','rb','kz','kg','am'],
      deliveryPrice: false,
      description: false,
      gender: gender === 'men'
        ? 'Мужской'
        : 'Женский',
      installment: true,
      imageCatalog,
      images: imageLinksArray,
      like: 0,
      link: productLink,
      name: nameArrayCyrillic.join(' ').replaceAll('Мужской', '').replaceAll('Мужская', '').replaceAll('Мужские', '')
        .replaceAll('Женский', '').replaceAll('Женская', '').replaceAll('Женские', '').trim(),
      shop: 'brd',
      info: infoDetails,
      oldprice: oldprice,
      pp: 'admitad',
      price: price,
      sale: sale,
      season: false,
      season_t: false,
      sizes,
      style: false,
      style_t: false,
      structure: structure,
      subcategory,
      subcategory_t: getTransliterate(subcategory),
      reviews: hasReviews !== null
        ? {
            rating: generalRating,
            reviews: reviewsList
          }
        : false,
      bonus: dom.querySelector('div.payment-variants').querySelector('div.payment-variants-list.credit-card') !== null
        ? {
            saleOnlinePurchases: parseInt((dom.querySelector('div.payment-variants').querySelector('div.payment-variants-list.credit-card').querySelector('span.subtext').textContent).match(/\d+/))
          }
        : false
    }
    product.sizes = convertSizes({ sizes, brand, subcategory, gender } = product)
      .map(size => size.replaceAll(',', '.').replaceAll('XXL', '2XL'))
    if (product.imageCatalog === '') return
    return product
  } catch (e) {
    console.log('Товар', productLink, 'не собран', e)
    return null
  }
}
