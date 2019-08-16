module.exports.listPets = function(File) {
    return new Promise((resolve, reject) => {
        if(File) {
            resolve(File)
        } else {
            reject(null)
        }
    });
}