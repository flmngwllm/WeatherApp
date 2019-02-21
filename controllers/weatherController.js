const Weather = require('../models/Weather')

const weatherController = {
    index: (req, res) => {
        Weather.find()
        .then((weathers) =>{
            res.send(weathers)
        })
    },

    show: (req, res) => {
        Weather.findById(req.params.weatheId)
        .then((weather) =>{
            res.send(weather)
        })
    },

    create: (req, res) => {
        Weather.create(req.body)
        .then((weather)=>{
            res.send(weather)
        })
    },

    patch: (req, res) =>{
        Weather.findByIdAndUpdate(req.params.weatherId, req.body)
        .then((updatedWeather) => {
            updatedWeather.save()
            res.send(updatedWeather)
        })
    },

    delete: (req, res) => {
        Weather.findByIdAndDelete(req.params.weatherId)
        .then(()=>{
            res.send(200)
        })
    }
}

module.exports = weatherController