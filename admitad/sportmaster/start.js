const axios = require('axios')
// const getProducts = require('./getProducts');


// (async function () {
//
//   // дата начала парсинга товаров
//   let date = new Date()
//   console.log('Начало парсинга в ', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
//
//   // мужские продукты
//   // await getProducts('men')
//   // женские продукты
//   await getProducts('women')
//
//   // дата завершения парсинга товаров
//   date = new Date()
//   console.log('Завершение парсинга в ', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
//
//   // обновление продуктов
//   await axios.post('http://localhost:3005/update-products', { shop: 'sportmaster' })
// })()

axios.post('http://localhost:3005/update-products', { shop: 'sportmaster' })


