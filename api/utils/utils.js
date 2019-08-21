const ErrMsg = require("./errmsg.js")

let RouteExceptionHandler = function(req, res) {
    res.status(404).json(ErrMsg.BadRequest)
}

let HealthCheck = function(req, res) {
	res.status(200).json(ErrMsg.OK)
}

module.exports = {
	RouteExceptionHandler : RouteExceptionHandler,
	HealthCheck : HealthCheck
}