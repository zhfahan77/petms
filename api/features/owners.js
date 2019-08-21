const Core = require("../core/owners.js"),
DB = require("../db/owners.js"),
logger = require("../utils/logger.js")

module.exports.listOwners = (req, res) => {
	Core
		.listOwners(DB)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.listOwner = (req, res) => {
	Core
		.listOwner(DB, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		})
		.catch(err => {
			res.status(err.statusCode || 500).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}