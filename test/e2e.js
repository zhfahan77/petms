//Require the dev-dependencies
let app = require('../app.js')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = require('should')
let ErrMsg = require("../api/utils/errmsg.js")

chai.use(chaiHttp)

describe("Unwanted Route Exception Handling", () => {

    describe("GET /invalid", () => {
        it("it should show a message if no routes found", (done) => {

            chai
                .request(app)
                .get("/invalid")
                .end((err, result) => {
                    result.status.should.be.eql(404);
                    result.body.should.be.deepEqual(ErrMsg.DefaultRouteException)
                    done();
                });
        });
    });

    describe("GET /api/invalid", () => {
        it("it should show a message if no routes found", (done) => {

            chai
                .request(app)
                .get("/api/invalid")
                .end((err, result) => {
                    result.status.should.be.eql(404);
                    result.body.should.be.deepEqual(ErrMsg.BadRequest)
                    done();
                });
        });
    });
});

describe("List Owners API", () => {

    describe("/api/owners should return owners", () => {
        it("it should return an array of objects with owners details", (done) => {
            chai
                .request(app)
                .get('/api/owners')
                .end((err, result) => {
                    result.body.should.be.an.Array
                    result.body.length.should.be.above(0)
                    result.status.should.be.eql(200)
                    done()
                })
        });
    });
});