const axios = require('axios')
const sleep = require('await-sleep')


module.exports = async function getDeeplinks (products) {

  let counter = 0

  for (let product of products) {

    counter += 1

    const res = await axios.post('http://localhost:3005/deeplink', {
      'deeplink': product.link,
      'pp': 'admitad',
      'offerId': 14647
    })
    product.link = res.data

    console.log(counter, 'deeplink')
    await sleep(100)
  }
  return products
}
