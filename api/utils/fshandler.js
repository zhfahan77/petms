const fs = require('fs')
ErrMsg = require('./errmsg.js')

module.exports.writeFile = function(file, newData) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err, data) {
            if (err) {
                return reject(false)
            }
            var json = JSON.parse(data)
            json.push(newData)

            fs.writeFile(file, JSON.stringify(json), function(err) {
                if (err) {
                    return reject(false)
                }
                resolve(true)
            })
        })
    });
}

module.exports.readFile = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err, data) {
            if (err) {
                return reject(false)
            }
            var json = JSON.parse(data)
            resolve(json)
        })
    });
}

module.exports.writeDirectToFile = function(file, newData) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(newData), function(err) {
            if (err) {
                return reject(false)
            }
            resolve(true)
        })
    })
}