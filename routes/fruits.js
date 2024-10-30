const express = require('express')
const route = express.Router()
const fruitController = require('../controllers/fruits')

route.get('/fruits/new', fruitController.newFruit)
route.post('/fruits', fruitController.create)
route.get('/fruits', fruitController.index)
route.get('/fruits/:id', fruitController.show)

module.exports = route
