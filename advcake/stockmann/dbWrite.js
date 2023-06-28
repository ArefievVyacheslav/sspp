const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')


module.exports = async function dbWrite (products) {
  try {
    await client.connect()
    const db = await client.db('ss')
    const collection = await db.collection('temp_products').findOne({ shop: 'stockmann' })
    if (collection) {
      products.forEach(product => {
        collection.products.push(product)
      })
      await db.collection('temp_products').replaceOne({ shop: 'stockmann' }, collection)
    } else {
      await db.collection('temp_products').insertOne({
        shop: 'stockmann',
        products: products
      })
    }
    console.log('закончил запись мужских товаров в базу')
    await client.close()
  } catch (e) {
    console.log(e)
  }
}