const ErrMsg = require("../utils/errmsg.js")

module.exports.listOwners = (DB) => {
	return new Promise((resolve, reject) => {
		DB
			.listOwners()
			.then(result => {
				if(!result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				console.log("in err", err)
				reject(err)
			})
	})
}

module.exports.listOwner = (DB, Params) => {
	return new Promise((resolve, reject) => {
		DB
			.listOwner(Params)
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