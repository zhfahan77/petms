// Require all necessary files
const express = require("express"),
router = express.Router(),
Utils = require("../utils/utils.js"),
Owners = require("../features/owners.js")
Pets = require("../features/pets.js")

// Health
router
	.route("/health")
	.get(Utils.HealthCheck)

// Owners
router
	.route("/owners")
	.get(Owners.listOwners)

// Pets
router
	.route("/pets")
	.get(Pets.listPets)
	.post(Pets.addPet)

router
	.route("/pets/owner/:owner_id")
	.get(Pets.listPetsForAnOwner)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;