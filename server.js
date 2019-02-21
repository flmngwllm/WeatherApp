const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan')
const routes = require('./routes/index')
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use('/', routes)

app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res)=>{
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server is still listening on: ${PORT}`);
})