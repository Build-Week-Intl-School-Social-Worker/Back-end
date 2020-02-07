const request = require('supertest');

const db = require('../data/dbConfig');

const server = require("../api/server");


describe("POST /auth/register", () => {
    it("should return json", () => {
        return request(server)
            .post("/auth/register").then(res => {
            expect(res.type).toBe("application/json");
        })
    })
    it("should return 201", () => {
        beforeEach(async () => {
            await db("users").truncate();
    })
        return request(server)
            .post("/auth/register")
            .send({name: 'Brad Man', role_id: 1, email: "brad3@man.com", phone: "515-784-2738", password: "Unprotected", org_name: "Hogwarts"})
            .then(res => {
                expect(res.status).toBe(201);
        })
    })
})