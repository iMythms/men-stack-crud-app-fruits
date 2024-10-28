const newFruit = (req, res) => {
	res.render('fruits/new.ejs')
}

const create = async (req, res) => {
	console.log(req.body)
}

module.exports = {
	newFruit,
	create,
}
