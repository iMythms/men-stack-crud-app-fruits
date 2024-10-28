const express = require('express')
const route = express.Router()
const fruitController = require('../controllers/fruits')

route.get('/fruits/new', fruitController.newFruit)
route.post('/fruits', fruitController.create)

module.exports = route
