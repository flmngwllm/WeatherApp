const Weather = require('../models/Weather')

const weatherController = {
    index: (req, res) => {
        Weather.find()
        .then((weathers) =>{
            res.send(weathers)
        })
    },
}

module.exports = weatherController