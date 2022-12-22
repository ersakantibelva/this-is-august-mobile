const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGODB_PASS = process.env.MONGODB_PASS

const uri = `mongodb+srv://ersakanti:${MONGODB_PASS}@cluster0.aw1b1vb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let database

async function mongoConnect() {
  try {
    database = client.db('ThisIsAugust');

    return database
  } catch (err) {
    console.log(err);
  }
}

function getDb() {
  return database
}

module.exports = { mongoConnect, getDb }