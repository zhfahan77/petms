const fs = require('fs'),
ErrMsg = require('./errmsg.js')

module.exports.readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                return reject(false)
            }
            var json = JSON.parse(data)
            resolve(json)
        })
    });
}

module.exports.writeFile = (file, newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(newData), (err) => {
            if (err) {
                return reject(false)
            }
            resolve(true)
        })
    })
}