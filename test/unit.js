//Require the dev-dependencies
let Data = require("./mocked_data_handler.js")
let Owners = require("../api/core/owners.js")
let File = require("../api/data/data.json")
let should = require('should')
let ErrMsg = require("../api/utils/errmsg.js")

describe("List Owners", () => {

    describe("Owners.listOwners should return owners and call data handler function", () => {
        it("it should return an array of objects with owners details", (done) => {

            Owners
                .listOwners(Data, File)
                .then(result => {
                    result.should.be.an.Array
                    result.length.should.be.above(0)
                    result.should.be.equal(File)
                    done()
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe("Owners.listOwners should return an error message if no records found", () => {
        it("it should return an object with error message", (done) => {
            File = []

            Owners
                .listOwners(Data, File)
                .then(result => {
                    console.log(result)
                }).catch(err => {
                    err.should.be.equal(ErrMsg.NotFound)
                    done()
                })
        });
    });
});