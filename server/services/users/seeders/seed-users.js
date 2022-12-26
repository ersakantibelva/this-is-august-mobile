const { MongoClient, ServerApiVersion } = require("mongodb");
const MONGODB_PASS = process.env.MONGODB_PASS
const users = require('../db/users.json')
console.log(MONGODB_PASS);

const uri = `mongodb+srv://ersakanti:${MONGODB_PASS}@cluster0.aw1b1vb.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function seedUsers() {
  try {
    const Users = client.db("ThisIsAugust").collection("users");


    const options = { ordered: true };
    const result = await Users.insertMany(users, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

seedUsers()