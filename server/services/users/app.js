if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const cors = require('cors');
const { mongoConnect } = require('./config/mongoConnect');
const router = require('./router');
const errorHandler = require('./middlewares/errorHandler');
const app = express()
const port = 4001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.use(errorHandler)

mongoConnect()
.then(async (database) => {
  console.log("MongoDb connected!");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})
