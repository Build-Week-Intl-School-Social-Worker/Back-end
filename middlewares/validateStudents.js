const validateStudents = (req, res, next) => {
    const data = req.body;
    if (!data) {
        res.status(400).json({ message: "Must include student info" });
    } else if (!data.name) {
        res.status(400).json({ message: "Please include the student's name" });
    } else if (!data.age) {
        res.status(400).json({ message: "Please include the student's age" });
    } else if (!data.grade) {
        res.status(400).json({ message: "Please include the student's grade" });
    } else if (!data.bio) {
        res.status(400).json({ message: "Please include the student's bio" });
    } else if (!data.status) {
        res.status(400).json({ message: "Please include the student's status" });
    } else if (data.status !== "student" || data.status !== "past_student" || data.status !== "visitor") {
        res.status(400).json({ message: "Please set student status to either student, past_student, or visitor" });
    } else if (!data.insurance_card) {
        res.status(400).json({ message: "Please include the student's insurance card information" });
    } else if (!data.expire_date) {
        res.status(400).json({ message: "Please include the student's insurance expire_date" });
    } else if (!data.birth_cert) {
        res.status(400).json({ message: "Please include the student's birth_cert" });
    } else if (!data.child_rep) {
        res.status(400).json({ message: "Please include the student's child_rep" });
    } else if (!data.child_rep_phone && !data.child_rep_email) {
        res.status(400).json({ message: "Please include either the student's child_rep_phone or child_rep_email" });
    } else {
        next()
    }
}

module.exports = validateStudents;