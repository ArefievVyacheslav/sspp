const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
let counter = 0

module.exports = async function dbWrite (products) {
  counter += 1
  try {
    await client.connect()
    const db = await client.db('ss')
    const collection = await db.collection('temp_products').findOne({ shop: 'vipavenue' })
    if (collection) {
      if (counter === 1) collection.products = products
      else products.forEach(product => {
        collection.products.push(product)
      })
      await db.collection('temp_products').replaceOne({ shop: 'vipavenue' }, collection)
    } else {
      await db.collection('temp_products').insertOne({
        shop: 'vipavenue',
        products
      })
    }
    console.log('закончил запись мужских товаров в базу')
    await client.close()
  } catch (e) {
    console.log(e)
  }
}
