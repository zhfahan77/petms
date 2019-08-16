const Core = require("../core/owners.js")
const Data = require("../data/owners.js")
const File = require("../data/json/owners.json")

module.exports.listOwners = function(req, res) {
	Core
		.listOwners(Data, File)
		.then(result => {
			res.status(200).json(result)
		}).catch(err => {
			res.status(200).json(err)
		})
}