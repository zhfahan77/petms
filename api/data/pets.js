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