const express = require('express')
const request = require('request');
const api = require('./server/routes/api')
const port = 8000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bikeDB', { useNewUrlParser: true })
const app = express()

app.use('/', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))