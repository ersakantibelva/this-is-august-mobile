const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const app = express()
const port = 4000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})