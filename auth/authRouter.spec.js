const request = require('supertest');

const server = require("../api/server");


describe("POST /auth/register", () => {
    it("should return json", () => {
        return request(server)
            .post("/auth/register").then(res => {
            expect(res.type).toBe("application/json");
        })
    })
    it("should return 201", () => {
        return request(server)
            .post("/auth/register")
            .send({name: 'Brad Man', role_id: 1, email: "brad2@man.com", phone: "515-784-2738", password: "Unprotected", org_name: "Hogwarts"})
            .then(res => {
                expect(res.status).toBe(201);
        })
    })
})