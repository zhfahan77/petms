const FSHandler = require("../utils/fshandler.js"),
Path = require("path"),
PROOT = Path.resolve(),
File = PROOT + process.env.PETS_FILE_PATH

let listPets = () => {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    });
}

let addPet = (Pet) => {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                result.push(Pet)
                return result
            })
            .then(result => {
                return FSHandler.writeFile(File, result)
            })
            .then(result => {
                resolve(Pet)
            })
            .catch(err => {
                reject(err)
            })
    });
}

let listPetsForAnOwner = (Params) => {
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

let editPet = (Params, Pet) => {
    return new Promise((resolve, reject) => {
        var updatedData
        FSHandler
            .readFile(File)
            .then(result => {
                return result
            })
            .then(result => {
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
                    return FSHandler.writeFile(File, result)
                }
            })
            .then(result => {
                resolve(updatedData)
            })
            .catch(err => {
                reject(err)
            })
    });
}

let listPet = (Params) => {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                let filtered_data = result.filter(el => el.id == Params.pet_id)
                if(filtered_data.length) {
                    resolve(filtered_data[0])
                } else {
                    resolve(null)
                }
            })
            .catch(err => {
                reject(err)
            })
    });
}

module.exports = {
    listPets : listPets,
    addPet : addPet,
    listPetsForAnOwner : listPetsForAnOwner,
    editPet : editPet,
    listPet : listPet
}