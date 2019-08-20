const Core = require("../core/owners.js"),
Data = require("../data/owners.js"),
Path = require("path"),
PROOT = Path.resolve(),
File =  PROOT + process.env.OWNERS_FILE_PATH,
logger = require("../utils/logger.js")

module.exports.listOwners = function(req, res) {
	Core
		.listOwners(Data, File)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		}).catch(err => {
			res.status(200).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}

module.exports.listOwner = function(req, res) {
	Core
		.listOwner(Data, File, req.params)
		.then(result => {
			res.status(200).json(result)
			logger.info(res.locals.reqID + " " + 200)
		}).catch(err => {
			res.status(200).json(err)
			logger.error(res.locals.reqID + " " + JSON.stringify(err))
		})
}