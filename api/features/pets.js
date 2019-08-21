const Core = require("../core/pets.js"),
DB = require("../db/pets.js"),
logger = require("../utils/logger.js")

module.exports.listPets = (req, res) => {
	Core
		.listPets(DB)
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
		.addPet(DB, req.body)
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
		.listPetsForAnOwner(DB, req.params)
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
		.editPet(DB, req.params, req.body)
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
		.listPet(DB, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}