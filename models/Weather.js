const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Weather = new Schema({
    city: String,
    celsius: Number,
    Day: String,
    farenheit: Number

})

module.exports = mongoose.model('Weather', Weather)