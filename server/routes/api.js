const express = require('express')
const router = express.Router()
const request = require('request')
// const Bike = require('../models/BikeModel')

router.get('/bikes', function(req,res) {
    request('http://api.citybik.es/v2/networks',
    function (err, response, body) {
        const obj = JSON.parse(body)
        res.send(obj)
    })
})

module.exports = router
