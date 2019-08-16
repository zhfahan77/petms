//Require the dev-dependencies
let app = require('../app.js')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = require('should')
let ErrMsg = require("../api/utils/errmsg.js")

chai.use(chaiHttp)

describe("Health Check Endpoint", () => {

    describe("GET /api/health", () => {
      it("it should show a message if health is ok", (done) => {

        chai
            .request(app)
            .get("/api/health")
            .end((err, result) => {
                  result.status.should.be.eql(200);
                  result.body.should.be.eql(ErrMsg.OK);
              done();
            });
      });
    });
});

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

describe("List Pets API", () => {

    describe("GET /api/pets should return owners", () => {
        it("it should return an array of objects with owners details", (done) => {
            chai
                .request(app)
                .get('/api/pets')
                .end((err, result) => {
                    result.body.should.be.an.Array
                    result.body.length.should.be.above(0)
                    result.status.should.be.eql(200)
                    done()
                })
        });
    });
});