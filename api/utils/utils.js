const ErrMsg = require("./errmsg.js")

module.exports.RouteExceptionHandler = function(req, res) {
    res.status(404).json(ErrMsg.BadRequest)
}