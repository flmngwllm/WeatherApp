require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.open('open', ()=>{
    console.log('Mongoose has connected to MongoDB')
})

mongoose.connection.on('error', ()=>{
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose