const ErrMsg = require("./errmsg.js")

module.exports.RouteExceptionHandler = function(req, res) {
    res.status(404).json(ErrMsg.BadRequest)
}

module.exports.HealthCheck = function(req, res) {
	res.status(200).json(ErrMsg.OK)
}