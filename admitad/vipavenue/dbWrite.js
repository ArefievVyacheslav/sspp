const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
counter = { men: 0, women: 0 }

module.exports = async function dbWrite (products, gender) {
  counter[gender] += 1
  try {
    await client.connect()
    const db = await client.db('ss')
    const collection = await db.collection('temp_products').findOne({ shop: 'vipavenue', gender: gender === 'men' ? 'Мужской' : 'Женский' })
    if (collection) {
      if (counter[gender] === 1) collection.products = products
      else products.forEach(product => {
        collection.products.push(product)
      })
      await db.collection('temp_products').replaceOne({ shop: 'vipavenue', gender: gender === 'men' ? 'Мужской' : 'Женский' }, collection)
    } else {
      await db.collection('temp_products').insertOne({
        shop: 'vipavenue',
        gender: gender === 'men' ? 'Мужской' : 'Женский',
        products
      })
    }
    console.log('закончил запись мужских товаров в базу')
    await client.close()
  } catch (e) {
    console.log(e)
  }
}
