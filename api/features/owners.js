const Core = require("../core/owners.js")
Data = require("../data/owners.js")
File = __dirname + "/../../JSON/owners.json"
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