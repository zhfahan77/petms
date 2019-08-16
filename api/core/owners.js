const ErrMsg = require("../utils/errmsg.js")

module.exports.listOwners = function(Data, File) {
	return new Promise((resolve, reject) => {
		Data
			.listOwners(File)
			.then(result => {
				if(!result || !result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			}).catch(err => {
				reject(err)
			})
	})
}