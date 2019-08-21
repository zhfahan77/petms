const ErrMsg = require("../utils/errmsg.js")

module.exports.listOwners = (Data, File) => {
	return new Promise((resolve, reject) => {
		Data
			.listOwners(File)
			.then(result => {
				if(!result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
	})
}

module.exports.listOwner = (Data, File, Params) => {
	return new Promise((resolve, reject) => {
		Data
			.listOwner(File, Params)
			.then(result => {
				if(!result) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
	})
}