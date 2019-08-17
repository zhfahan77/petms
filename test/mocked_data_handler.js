let listOwners = function(File) {
    return new Promise((resolve, reject) => {
        if(File) {
            resolve(File)
        } else {
            reject(null)
        }
    });
}

let addPet = function(File, Pet) {
	return new Promise((resolve, reject) => {
        resolve(Pet)
    });
}

let listPetsForAnOwner = function(File, Params) {
    return new Promise((resolve, reject) => {
        resolve(File.filter(el => el.owner_id == Params.owner_id))
    });
}

let editPet = function(File, Params, Pet) {
    return new Promise((resolve, reject) => {
        let filtered_array = File.filter(el => el.id == Params.pet_id)

        if(filtered_array.length) {
            resolve(Pet)
        } else {
            reject(filtered_array)
        }
    });
}

let listPets = listOwners

module.exports = {
    listOwners : listOwners,
    listPets : listPets,
    addPet : addPet,
    listPetsForAnOwner : listPetsForAnOwner,
    editPet : editPet,
}