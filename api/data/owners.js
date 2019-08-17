const FSHandler = require("../utils/fshandler.js")

module.exports.listOwners = function(File) {
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