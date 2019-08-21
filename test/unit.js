//Require the dev-dependencies
let DB = require("./mocked_db_handler.js")
let Owners = require("../api/core/owners.js")
let Pets = require("../api/core/pets.js")
let OwnersFile = require("./mocked_json/owners.json")
let PetsFile = require("./mocked_json/pets.json")
let should = require('should')
let ErrMsg = require("../api/utils/errmsg.js")

describe("List Owners", () => {

    describe("Owners.listOwners should return owners and call DB handler function", () => {
        it("it should return an array of objects with owners details", (done) => {

            Owners
                .listOwners(DB)
                .then(result => {
                    result.should.be.an.Array
                    result.length.should.be.above(0)
                    result.should.be.equal(OwnersFile)
                    done()
                }).catch(err => {
                    console.log("here", err)
                })
        });
    });

    describe("Owners.listOwners should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {

            DB.listOwners = () => {
                return new Promise((resolve, reject) => {
                    resolve([])
                });
            }

            Owners
                .listOwners(DB)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});

describe("List Pets", () => {

    describe("Pets.listPets should return pets and call DB handler function", () => {
        it("it should return an array of objects with pets details", (done) => {

            Pets
                .listPets(DB)
                .then(result => {
                    result.should.be.an.Array
                    result.length.should.be.above(0)
                    result.should.be.equal(PetsFile)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Pets.listPets should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            DB.listPets = function() {
                return new Promise((resolve, reject) => {
                    resolve([])
                });
            }

            Pets
                .listPets(DB)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});

describe("Add Pet", () => {

    describe("Pets.addPet should add pet and call DB handler function", () => {
        it("it should return an object with pet details", (done) => {
            let newPet = {
                "name": "Pet 4",
                "color": "white",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            Pets
                .addPet(DB, newPet)
                .then(result => {
                    result.should.be.equal(newPet)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Pets.addPet should return error message if required fields not provided", () => {
        it("it should return an object with error details", (done) => {
            let newPet = {
                "name": "Pet 4",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            Pets
                .addPet(DB, newPet)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.AddPetRequiredFieldsNotFound)
                    done()
                })
        });
    });
});

describe("List Pets for an Owner", () => {

    describe("Pets.listPetsForAnOwner should return pets and call DB handler function", () => {
        it("it should return an array of objects with pet details", (done) => {
            let Params = {
                "owner_id": 1
            }

            Pets
                .listPetsForAnOwner(DB, Params)
                .then(result => {
                    result.should.be.an.Array
                    result[0].should.have.a.property('owner_id').equal(Params.owner_id)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });
});

describe("Edit Pet", () => {

    describe("Pets.editPet should edit pet and call DB handler function", () => {
        it("it should return an object with pet details", (done) => {
            let updatedPet = {
                "name": "Pet 4",
                "color": "white",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            let Params = {
                "pet_id": 1
            }

            Pets
                .editPet(DB, Params, updatedPet)
                .then(result => {
                    result.should.be.equal(updatedPet)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Pets.editPet should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            let PetsFile = []
            let updatedPet = {
                "name": "Pet 4",
                "color": "white",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            let Params = {
                "pet_id": 12
            }

            Pets
                .editPet(DB, Params, updatedPet)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});

describe("List One Pet", () => {

    describe("Pets.listPet should return pet and call DB handler function", () => {
        it("it should return an object with pets details", (done) => {
            let Params = {
                "pet_id": 1
            }

            Pets
                .listPet(DB, Params)
                .then(result => {
                    result.should.have.a.property("id").equal(Params.pet_id)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Pets.listPet should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            DB.listPet = function(Params) {
                return new Promise((resolve, reject) => {
                    resolve(null)
                })
            }

            let Params = {
                "pet_id": 1
            }

            Pets
                .listPet(DB, Params)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});

describe("List One Owner", () => {

    describe("Owners.listOwner should return owner and call DB handler function", () => {
        it("it should return an object with owner details", (done) => {
            let Params = {
                "owner_id": 1
            }

            Owners
                .listOwner(DB, Params)
                .then(result => {
                    result.should.have.a.property("id").equal(Params.owner_id)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Owners.listOwner should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            DB.listOwner = () => {
                return new Promise((resolve, reject) => {
                    resolve(null)
                });
            }

            let Params = {
                "owner_id": 1
            }

            Owners
                .listOwner(DB, Params)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});