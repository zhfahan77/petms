const ErrMsg = require("../utils/errmsg.js")
fs = require('fs')

module.exports.listPets = function(Data, File) {
	return new Promise((resolve, reject) => {
		Data
			.listPets(File)
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

module.exports.addPet = function(Data, File, Pet) {
	return new Promise((resolve, reject) => {
		Data
			.addPet(File, Pet)
			.then(result => {
				resolve(result)
			}).catch(err => {
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}

module.exports.listPetsForAnOwner = function(Data, File, Params) {
	return new Promise((resolve, reject) => {
		Data
			.listPetsForAnOwner(File, Params)
			.then(result => {
				if(!result || !result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			}).catch(err => {
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}