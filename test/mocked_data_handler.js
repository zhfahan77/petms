let listOwners = function(File) {
    return new Promise((resolve, reject) => {
        if(File) {
            resolve(File)
        } else {
            reject(null)
        }
    });
}

let listPets = listOwners

module.exports = {
    listOwners : listOwners,
    listPets : listPets
}