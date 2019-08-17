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