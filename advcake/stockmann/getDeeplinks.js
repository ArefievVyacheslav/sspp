const axios = require('axios')
const sleep = require('await-sleep')


module.exports = async function getDeeplinks (products) {

  let counter = 0

  for (let product of products) {

    try {
      counter += 1

      const {data} = await axios.post('http://localhost:3005/deeplink', {
        'deeplink': product.link,
        'pp': 'advcake',
      })
      product.link = data

      console.log(counter, 'deeplink')
      await sleep(100)
    } catch (e) {
      console.log('Петушиный диплинк не пришёл')
      products = products.filter(productNew => productNew.link !== product.link)
    }
  }
  return products
}
