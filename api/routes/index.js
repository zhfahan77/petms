// Require all necessary files
const express = require("express"),
router = express.Router(),
Utils = require("../utils/utils.js"),
Owners = require("../features/owners.js")

//Product Search
router
	.route("/owners")
	.get(Owners.listOwners)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;