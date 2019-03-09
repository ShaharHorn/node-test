const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bike = new Schema ({
    name: String
})

const Bike = mongoose.Schema("Bike", bike)
module.exports = Bike