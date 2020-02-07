const Students = require("./studentsModel");

const db = require("../data/dbConfig");

describe("Student Model", () => {
    describe("testing env", () => {
        it("Should run in the testing env", () => {
            expect(process.env.DB_ENV).toBe("testing");
        })
    })
    describe("add", () => {
        beforeEach(async () => {
            await db("students").truncate();
    })
        it("adds a student to the db", async () => {
            await Students.add({name: 'Joey B', age: 16, grade: "10th", image: null, bio: "He's a kid", status: "student",
          insurance_card: true, expire_date: "09-23-2020", birth_cert: true, special_needs: null, child_rep: "Mother",
          child_rep_phone: "706-482-0983", child_rep_email: "joeysmom@mother.com"})

            const students = await db("students")

            expect(students).toHaveLength(1);
        })
    })
})