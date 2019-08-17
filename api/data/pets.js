const FSHandler = require("../utils/fshandler.js")

module.exports.listPets = function(File) {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
    });
}

module.exports.addPet = function(File, Pet) {
    return new Promise((resolve, reject) => {
        FSHandler
            .writeFile(File, Pet)
            .then(result => {
                resolve(Pet)
            }).catch(err => {
                reject(err)
            })
    });
}

module.exports.listPetsForAnOwner = function(File, Params) {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                let filtered_data = result.filter(el => el.owner_id == Params.owner_id)
                resolve(filtered_data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
    });
}

module.exports.editPet = function(File, Params, Pet) {
    return new Promise((resolve, reject) => {
        var updatedData
        FSHandler
            .readFile(File)
            .then(result => {
                return result
            }).then(result => {
                let foundIndex = result.findIndex(el => el.id == Params.pet_id);
                if(foundIndex < 0) {
                    return reject([])
                } else {
                    updatedData = {
                        "id" : result[foundIndex].id,
                        "name" : Pet.name || result[foundIndex].name,
                        "color" : Pet.color || result[foundIndex].color,
                        "age" : Pet.age || result[foundIndex].age,
                        "breed" : Pet.breed || result[foundIndex].breed,
                        "owner_id" : result[foundIndex].owner_id
                    }

                    result[foundIndex] = updatedData
                    return FSHandler.writeDirectToFile(File, result)
                }
            }).then(result => {
                resolve(updatedData)
            }).catch(err => {
                reject(err)
            })
    });
}