const axios = require('axios')


module.exports = async function getDeeplinks (products) {

  for (let product of products) {

    const res = await axios.post('http://localhost:3005/deeplink', {
      'deeplink': product.link,
      'pp': 'admitad',
      'offerId': 14647
    })

    product.link = res.data
  }

  return products

}
