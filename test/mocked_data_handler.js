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

let listPets = listOwners

module.exports = {
    listOwners : listOwners,
    listPets : listPets,
    addPet : addPet,
}