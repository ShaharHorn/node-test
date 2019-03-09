const express = require('express')
const api = require('./server/routes/api')
const port = 8000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bikeDB', { useNewUrlParser: true })
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use('/', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))