const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Weather = new Schema({
    city: String,
    Celsius: Number,
    Day: String,
    Farenheit: Number

})

module.exports = mongoose.model('Weather', Weather)