// Require all necessary files
const express = require("express"),
router = express.Router(),
Utils = require("../utils/utils.js"),
Owners = require("../features/owners.js"),
Pets = require("../features/pets.js")

// Health
router
	.route("/health")
	.get(Utils.HealthCheck)

// Owners
router
	.route("/owners")
	.get(Owners.listOwners)

router
	.route("/owners/:owner_id")
	.get(Owners.listOwner)

// Pets
router
	.route("/pets")
	.get(Pets.listPets)
	.post(Pets.addPet)

router
	.route("/pets/:pet_id")
	.get(Pets.listPet)
	.put(Pets.editPet)

router
	.route("/pets/owner/:owner_id")
	.get(Pets.listPetsForAnOwner)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;