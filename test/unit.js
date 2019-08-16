//Require the dev-dependencies
let Data = require("./mocked_data_handler.js")
let Owners = require("../api/core/owners.js")
let OwnersFile = require("../api/data/json/owners.json")
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