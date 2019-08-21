const ErrMsg = require("../utils/errmsg.js")
short = require('shortid-36');

module.exports.listPets = (DB) => {
	return new Promise((resolve, reject) => {
		DB
			.listPets()
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

module.exports.addPet = (DB, Pet) => {
	return new Promise((resolve, reject) => {
		if(!Pet.name || !Pet.color || !Pet.age || !Pet.breed || !Pet.owner_id) {
			return reject(ErrMsg.AddPetRequiredFieldsNotFound)
		}

		Pet.id = short.generate()

		DB
			.addPet(Pet)
			.then(result => {
				resolve(result)
			})
			.catch(err => {
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}

module.exports.listPetsForAnOwner = (DB, Params) => {
	return new Promise((resolve, reject) => {
		DB
			.listPetsForAnOwner(Params)
			.then(result => {
				if(!result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}

module.exports.editPet = (DB, Params, Pet) => {
	return new Promise((resolve, reject) => {
		DB
			.editPet(Params, Pet)
			.then(result => {
				resolve(result)
			})
			.catch(err => {
				if(!err.length) {
					return reject(ErrMsg.NotFound)
				}
				reject(ErrMsg.SomethingWentWrong)
			})
	})
}

module.exports.listPet = (DB, Params) => {
	return new Promise((resolve, reject) => {
		DB
			.listPet(Params)
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