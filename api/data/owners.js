const FSHandler = require("../utils/fshandler.js")

module.exports.listOwners = (File) => {
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

module.exports.listOwner = (File, Params) => {
    return new Promise((resolve, reject) => {
        FSHandler
            .readFile(File)
            .then(result => {
                let filtered_data = result.filter(el => el.id == Params.owner_id)
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