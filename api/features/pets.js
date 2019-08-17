const Core = require("../core/pets.js")
Data = require("../data/pets.js")
File = __dirname + "/../../JSON/pets.json"
logger = require("../utils/logger.js")

module.exports.listPets = function(req, res) {
	Core
		.listPets(Data, File)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		}).catch(err => {
			res.status(200).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.addPet = function(req, res) {
	Core
		.addPet(Data, File, req.body)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		}).catch(err => {
			res.status(200).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.listPetsForAnOwner = function(req, res) {
	Core
		.listPetsForAnOwner(Data, File, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		}).catch(err => {
			res.status(200).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}