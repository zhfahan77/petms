const Core = require("../core/pets.js")
const Data = require("../data/pets.js")
const File = __dirname + "/../../JSON/pets.json"

module.exports.listPets = function(req, res) {
	Core
		.listPets(Data, File)
		.then(result => {
			res.status(200).json(result)
		}).catch(err => {
			res.status(200).json(err)
		})
}

module.exports.addPet = function(req, res) {
	Core
		.addPet(Data, File, req.body)
		.then(result => {
			res.status(200).json(result)
		}).catch(err => {
			res.status(200).json(err)
		})
}