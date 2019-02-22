const mongoose = require('./connections')
const Weather = require('../models/Weather')

const test = new Weather({
    city: 'Atlanta',
    day: 'Monday',
    celsius: 32,
    farenheit: 63

})

Weather.remove({})
.then(()=> test.save())
.then(()=> console.log('Successful Save'))
.then(()=> mongoose.connection.close())