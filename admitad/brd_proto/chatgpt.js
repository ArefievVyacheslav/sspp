// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const iconv = require('iconv-lite');

// const axios = require('axios');
// const getProducts = require('./getProducts');
// const getOptions = require('./getOptions');
// // const getTransliterate = require('./getTransliterate')

// (async() => {
//     try {
//         let gender = 'men'

//         const options = getOptions(gender)
//         const res = await axios.post( ...options )
//         const ruHtml = iconv.decode(res.data, "win1251");
//         const dom = new JSDOM(ruHtml).window.document
//         let cloth = dom.querySelector('div.white-wrapper');
//         let oldprice = parseInt(cloth.querySelector('div.product-card__price__old').textContent)
//         let price = parseInt(cloth.querySelector('div.product-card__price__new').textContent)
//         let link = cloth.querySelector('a')
//         let brand = link.textContent
//         let href = link.href

//         const productOptions = getOptions(null, link)
//         const productRes = await axios.post( ...productOptions )
//         const ruHtmlProduct = iconv.decode(productRes.data, "win1251")
//         const domProduct = new JSDOM(ruHtmlProduct).window.document
//         const breadCrumbs = Array.from(domProduct.querySelectorAll('span[itemprop="name"]'))
//           .map(crumb => crumb.textContent.toLowerCase())
        
//         // console.log(breadCrumbs)
//         let category;
//         breadCrumbs[2].indexOf('одежда') !== -1
//           ? category = 'Одежда'
//           : breadCrumbs[2].indexOf('обувь') !== -1
//             ? category = 'Обувь'
//             : category = category
        
//         const attributes = domProduct.querySelector('dl.attributes')
//         colors = prop.querySelectorAll('dd')
//         color = attributes.querySelectorAll('dd')[colors.length - 1].textContent

//         const imageLinks = Array.from(domProduct.querySelector('section.desktop_images').querySelectorAll('a'))
//           .map(link => link.href)

//         const fullNameArray = cloth.querySelector('div').getAttribute('data-default-product-name').split(' ')
//         let name = []
//         function checkArr(fullNameArray) {
//             for (let word of fullNameArray) {
//               if (/^[0-9А-ЯЁ]+$/i.test(word)) name.push(word);
//             }
//           }
//         checkArr(fullNameArray)
//         name.push(brand)

//         let infoDetails = domProduct.querySelector('div.details').querySelector('meta[itemprop="description"]').getAttribute("content").split('\n')


//         const product = {
//             id: Math.floor(Math.random() * 9e9) + 1e9,
//             age: 'Взрослый',
//             benefit: oldprice - price,
//             brand: brand,
//             category: category
//               ? category
//               : 'Аксессуары',
//             // category_t: getTransliterate(category),
//             color: color,
//             // color_t: getTransliterate(color),
//             'country': false,
//             'country_t': false,
//             create: new Date,
//             delivery: ['ru'],
//             deliveryPrice: false,
//             description: false,
//             gender: gender
//             ? 'Мужской'
//             : 'Женский',
//             installment: true,
//             images: imageLinks,
//             like: 0,
//             link: `https://www.brd.ru${href}`,
//             name: name.join(' '),
//             shop: 'brd',
//             info: infoDetails,
//             oldprice: oldprice,
//             pp: 'admitad',
//             price: price,
//             // sale: productProto.discount_percent,
//         }
//         console.log(product)
//     }
//     catch(e) {
//         console.log(e)
//     }
// })();

for (let i=1; i<16; i++)
  {
  console.log(i);
  }