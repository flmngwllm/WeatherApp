const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))