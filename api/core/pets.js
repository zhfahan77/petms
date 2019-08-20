const ErrMsg = require("../utils/errmsg.js")
short = require('shortid-36');

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
		if(!Pet.name || !Pet.color || !Pet.age || !Pet.breed || !Pet.owner_id) {
			return reject(ErrMsg.AddPetRequiredFieldsNotFound)
		}

		Pet.id = short.generate()

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

module.exports.editPet = function(Data, File, Params, Pet) {
	return new Promise((resolve, reject) => {
		Data
			.editPet(File, Params, Pet)
			.then(result => {
				resolve(result)
			}).catch(err => {
				if(!err || !err.length) {
					return reject(ErrMsg.NotFound)
				}
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}

module.exports.listPet = function(Data, File, Params) {
	return new Promise((resolve, reject) => {
		Data
			.listPet(File, Params)
			.then(result => {
				if(!result) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			}).catch(err => {
				reject(err)
			})
	})
}