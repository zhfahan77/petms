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

    describe("GET /api/pets should return pets", () => {
        it("it should return an array of objects with pets details", (done) => {
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

describe("Add Pets API", () => {

    describe("POST /api/pets should add pets", () => {
        it("it should return an object with pet details", (done) => {
            let Data = {
                "name": "Pet 4",
                "color": "white",
                "age": 4,
                "breed": "breed1",
                "owner_id": 2
            }

            chai
                .request(app)
                .post('/api/pets')
                .send(Data)
                .end((err, result) => {
                    result.body.should.be.eql(Data)
                    done()
                })
        });
    });
});

describe("List Pets For An Owner API", () => {

    describe("Get /api/pets/owner/:owner_id should return pets of that owner", () => {
        it("it should return an array of objects with pet details", (done) => {
            let owner_id = 1

            chai
                .request(app)
                .get('/api/pets/owner/' + owner_id)
                .end((err, result) => {
                    result.body.should.be.an.Array
                    done()
                })
        });
    });
});

describe("Edit Pet API", () => {

    describe("PUT /api/pets/:pet_id should edit pet", () => {
        it("it should return an object with pet details", (done) => {
            let UpdatedData = {
                "name": "Pet 1 Updated",
                "color": "white",
                "age": 4,
                "breed": "breed1"
            }

            let pet_id = 1

            chai
                .request(app)
                .put('/api/pets/' + pet_id)
                .send(UpdatedData)
                .end((err, result) => {
                    result.body.should.have.a.property('name')
                    done()
                })
        });
    });
});

describe("List One Pet API", () => {

    describe("GET /api/pets/:pet_id should return one pet", () => {
        it("it should return an object with pets details", (done) => {
            let pet_id = 1

            chai
                .request(app)
                .get('/api/pets/' + pet_id)
                .end((err, result) => {
                    result.body.should.have.a.property('id').equal(pet_id)
                    result.status.should.be.eql(200)
                    done()
                })
        });
    });
});