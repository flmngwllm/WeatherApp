const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Weather = new Schema({
    city: String,
    Celsius: int,
    Day: String,
    Farenheit: int

})

module.exports = mongoose.model('Weather', Weather)