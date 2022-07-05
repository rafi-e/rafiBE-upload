const express = require('express')
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://Rafi_E:kll318n00b@cluster0.cgnkgli.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'dataPortofolio';
const app = express()
const port = process.env.PORT || 5000

app.get('/', async(req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('portofolioRafie');
  const data = await collection.find({}).toArray();
res.json({data})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})