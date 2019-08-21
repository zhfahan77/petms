let OwnersFile = require("./mocked_json/owners.json"),
PetsFile = require("./mocked_json/pets.json")

let listOwners = function() {
    return new Promise((resolve, reject) => {
        if(OwnersFile) {
            resolve(OwnersFile)
        } else {
            reject([])
        }
    });
}

let addPet = function(Pet) {
	return new Promise((resolve, reject) => {
        resolve(Pet)
    });
}

let listPetsForAnOwner = function(Params) {
    return new Promise((resolve, reject) => {
        resolve(PetsFile.filter(el => el.owner_id == Params.owner_id))
    });
}

let editPet = function(Params, Pet) {
    return new Promise((resolve, reject) => {
        let filtered_array = PetsFile.filter(el => el.id == Params.pet_id)

        if(filtered_array.length) {
            resolve(Pet)
        } else {
            reject(filtered_array)
        }
    });
}

let listPet = function(Params) {
    return new Promise((resolve, reject) => {
        let filtered_array = PetsFile.filter(el => el.id == Params.pet_id)

        if(filtered_array.length) {
            resolve(filtered_array[0])
        } else {
            resolve(null)
        }
    })
}

let listOwner = function(Params) {
    return new Promise((resolve, reject) => {
        let filtered_array = OwnersFile.filter(el => el.id == Params.owner_id)

        if(filtered_array.length) {
            resolve(filtered_array[0])
        } else {
            resolve(null)
        }
    })
}

let listPets = function() {
    return new Promise((resolve, reject) => {
        if(PetsFile) {
            resolve(PetsFile)
        } else {
            reject([])
        }
    });
}

module.exports = {
    listOwners : listOwners,
    listPets : listPets,
    addPet : addPet,
    listPetsForAnOwner : listPetsForAnOwner,
    editPet : editPet,
    listPet : listPet,
    listOwner : listOwner,
}