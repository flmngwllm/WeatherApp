const express = require('express')
const router = express.Router()
const weatherController = require('../controllers/weatherController')

router.get('api/weather', weatherController.index),
router.post('api/weather', weatherController.create)
router.get('api/weather/:weatherId', weatherController.show),
router.patch('api/weather/:weatherId', weatherController.patch),
router.delete('api/weather/:weatherId', weatherController.delete)

module.exports = router