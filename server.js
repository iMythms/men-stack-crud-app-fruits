require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT
const fruitRoute = require('./routes/fruits')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
	console.log(`Connected to MONGODB ${mongoose.connection.name}`)
})

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(fruitRoute)

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}`)
})
