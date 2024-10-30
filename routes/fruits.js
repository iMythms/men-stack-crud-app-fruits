const express = require('express')
const route = express.Router()
const fruitController = require('../controllers/fruits')

route.get('/fruits/new', fruitController.new)
route.post('/fruits', fruitController.create)
route.get('/fruits', fruitController.index)
route.get('/fruits/:id', fruitController.show)
route.delete('/fruit/:id', fruitController.delete)

module.exports = route
