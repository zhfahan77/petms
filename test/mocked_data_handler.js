module.exports.listOwners = function(File) {
    return new Promise((resolve, reject) => {
        if(File) {
            resolve(File)
        } else {
            reject(null)
        }
    });
}