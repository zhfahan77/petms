const Core = require("../core/pets.js"),
DB = require("../db/pets.js"),
logger = require("../utils/logger.js")

let listPets = (req, res) => {
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

let addPet = (req, res) => {
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

let listPetsForAnOwner = (req, res) => {
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

let editPet = (req, res) => {
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

let listPet = (req, res) => {
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

module.exports = {
	listPets : listPets,
	addPet : addPet,
	listPetsForAnOwner : listPetsForAnOwner,
	editPet : editPet,
	listPet : listPet
}