const Core = require("../core/pets.js")
const Data = require("../data/pets.js")
const File = require("../data/json/pets.json")

module.exports.listPets = function(req, res) {
	Core
		.listPets(Data, File)
		.then(result => {
			res.status(200).json(result)
		}).catch(err => {
			res.status(200).json(err)
		})
}