//Require the dev-dependencies
let Data = require("./mocked_data_handler.js")
let Owners = require("../api/core/owners.js")
let Pets = require("../api/core/pets.js")
let OwnersFile = require("./mocked_json/owners.json")
let PetsFile = require("./mocked_json/pets.json")
let should = require('should')
let ErrMsg = require("../api/utils/errmsg.js")

describe("List Owners", () => {

    describe("Owners.listOwners should return owners and call data handler function", () => {
        it("it should return an array of objects with owners details", (done) => {

            Owners
                .listOwners(Data, OwnersFile)
                .then(result => {
                    result.should.be.an.Array
                    result.length.should.be.above(0)
                    result.should.be.equal(OwnersFile)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Owners.listOwners should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            OwnersFile = []

            Owners
                .listOwners(Data, OwnersFile)
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

    describe("Pets.listPets should return pets and call data handler function", () => {
        it("it should return an array of objects with pets details", (done) => {

            Pets
                .listPets(Data, PetsFile)
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
            let PetsFile = []

            Pets
                .listPets(Data, PetsFile)
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

    describe("Pets.addPet should add pet and call data handler function", () => {
        it("it should return an object with pet details", (done) => {
            let newPet = {
                "name": "Pet 4",
                "color": "white",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            Pets
                .addPet(Data, PetsFile, newPet)
                .then(result => {
                    result.should.be.equal(newPet)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });
});

describe("List Pets for an Owner", () => {

    describe("Pets.listPetsForAnOwner should return pets and call data handler function", () => {
        it("it should return an array of objects with pet details", (done) => {
            let Params = {
                "owner_id" : 1
            }

            Pets
                .listPetsForAnOwner(Data, PetsFile, Params)
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