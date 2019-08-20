const Core = require("../core/pets.js"),
Data = require("../data/pets.js"),
Path = require("path"),
PROOT = Path.resolve(),
File = PROOT + process.env.PETS_FILE_PATH,
logger = require("../utils/logger.js")

module.exports.listPets = (req, res) => {
	Core
		.listPets(Data, File)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.addPet = (req, res) => {
	Core
		.addPet(Data, File, req.body)
		.then(result => {
			res.status(201).json(result)
			logger.info(res.locals.reqID + " " + 201)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.listPetsForAnOwner = (req, res) => {
	Core
		.listPetsForAnOwner(Data, File, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.editPet = (req, res) => {
	Core
		.editPet(Data, File, req.params, req.body)
		.then(result => {
			res.status(201).json(result)
			logger.info(res.locals.reqID + " " + 201)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.listPet = (req, res) => {
	Core
		.listPet(Data, File, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}