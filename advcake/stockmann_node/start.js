const axios = require('axios')
const getProducts = require('./getProducts');


(async function () {

  // дата начала парсинга товаров
  const startDate = new Date()
  console.log('Начало парсинга в ', startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds())

  // получаю продукты
  const getMenProductsPromise = getProducts('men')
  const getWomenProductsPromise = getProducts('women')

  try {
    // Дожидаюсь выполнения обеих функций
    const [menProducts, womenProducts] = await Promise.all([getMenProductsPromise, getWomenProductsPromise])

    // дата завершения парсинга товаров
    const endDate = new Date()
    console.log('Завершение парсинга в ', endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds())

    // обновление продуктов
    // await axios.post('http://localhost:3005/update-products', { shop: 'stockmann' })

    // сброс кэша
    // await axios.get('https://api.do-2000.store/clear-cache')
    // await axios.get('http://localhost:3004/clear-cache')
  } catch (e) {
    console.log(e)
    console.log('В ходе парсинга произошла ошибка!')
  }
})()
