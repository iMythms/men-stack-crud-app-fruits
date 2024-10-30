const Fruit = require('../models/Fruit')

const newFruit = (req, res) => {
	res.render('fruits/new.ejs')
}

const create = async (req, res) => {
	if (req.body.isReadyToEat === 'on') {
		req.body.isReadyToEat = true
	} else {
		req.body.isReadyToEat = false
	}
	await Fruit.create(req.body)
	res.redirect('/fruits/new')
}

const index = async (req, res) => {
	const fruits = await Fruit.find()
	res.render('fruits/index.ejs', { fruits })
}

const show = async (req, res) => {
	const id = req.params.id
	const fruit = await Fruit.findById(id)
	res.render('fruit/show.ejs', { fruit })
}

module.exports = {
	newFruit,
	create,
	index,
	show,
}
