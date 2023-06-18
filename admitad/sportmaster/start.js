const axios = require('axios')
const getProducts = require('./getProducts');


(async function () {

  // дата начала парсинга товаров
  const startDate = new Date()
  console.log('Начало парсинга в ', startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds())

  // // мужские продукты
  // await getProducts('men')
  // женские продукты
  await getProducts('women')

  // дата завершения парсинга товаров
  const endDate = new Date()
  console.log('Завершение парсинга в ', endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds())

  // обновление продуктов
  await axios.post('http://localhost:3005/update-products', { shop: 'sportmaster' })

  // сброс кэша
  // await axios.get('https://api.do-2000.store/clear-cache')
  await axios.get('http://localhost:3004/clear-cache')
})()



