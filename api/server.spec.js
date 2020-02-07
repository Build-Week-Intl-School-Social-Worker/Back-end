const request = require("supertest");

const db = require("../data/dbConfig")

const server = require("./server");

describe("server", () => {
    it("runs the tests", () => {
        expect(true).toBe(true);
    })
    describe("GET /", () => {
        it("should return 200 OK", () => {
            return request(server).get("/").then(res => {
                expect(res.status).toBe(200);
            })
        })
        it("should return html", () => {
            return request(server).get("/").then(res => {
                expect(res.type).toBe("text/html");
            })
        })
    })
})

