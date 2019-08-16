const fsp = require('fs').promises
ErrMsg = require('./errmsg.js')

module.exports.readFile = function(file) {
	if(!file) return ErrMsg.RequiredFieldNotFound

	fsp
		.readFile(file)
		.then(data => {
			return data
		})
		.catch(err => {
			return err
		})
}