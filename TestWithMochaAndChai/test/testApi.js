const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
const server = require("../index.js");
chai.should();
chai.use(chaiHttp);

describe("Test Apis", function () {

   //it runs before all test cases
    before(()=>{
        console.log("Testing for various request has started");
    });

    describe("Test GET /data", function () {

        it("It should return all results", function (done) {
            chai
                .request(server)
                .get("/data")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an("array");
                    console.log(response.body);
                done();
                });
        });
    });

    describe("GET /data/member/:id", function () {
        it("It should return single results", function (done) {
            chai
                .request(server)
                .get("/data/member/1")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.an("object");
                    response.body._id.should.equal(1);
                    expect(response.body.email).to.be.equal("sofia@gmail.com");
                    console.log(response.body);
                    done();
                });
        });
    });

    describe("POST /data/member",function()
    {
        it("It should add member to database",function(done)
        {
            let member={
                _id:9,
                name:"Salman Khan",
                email:"salman@gmail.com"
            };
             chai.request(server)
                 .post('/data/member')
                 .send(member)
                 .end((err,response)=>{
                     response.should.have.status(200);
                     console.log(response.body);
                done();
               });
        });
    });

    describe("PUT /data/member",function()
    {
        it("It should update the result",function(done)
        {
            let member={
                _id:9,
                name:"Salman Khan",
                email:"salmanKhan@gmail.com"
            };
             chai.request(server)
                 .put('/data/member')
                 .send(member)
                 .end((err,response)=>{
                     response.should.have.status(200);
                     console.log(response.body);
                done();
               });
        });
    });

    describe("DELETE /data/member/:id", function () {
        it("It should delete a particular data", function (done) {
            chai
                .request(server)
                .delete("/data/member/9")
                .end((err, response) => {
                    response.should.have.status(200);
                    console.log(response.body);
                    done();
                });
        });
    });
});
