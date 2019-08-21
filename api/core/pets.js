const ErrMsg = require("../utils/errmsg.js")
short = require('shortid-36');

let listPets = (DB) => {
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

let addPet = (DB, Pet) => {
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

let listPetsForAnOwner = (DB, Params) => {
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

let editPet = (DB, Params, Pet) => {
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

let listPet = (DB, Params) => {
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

module.exports = {
    listPets : listPets,
    addPet : addPet,
    listPetsForAnOwner : listPetsForAnOwner,
    editPet : editPet,
    listPet : listPet
}