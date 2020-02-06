const validateRegister = (req, res, next) => {
    const data = req.body;
    if (!data) {
        res.status(400).json({ message: "Must include user info" });
    } else if (!data.name) {
        res.status(400).json({ message: "Please include the user's name" });
    } else if (!data.role_id) {
        res.status(400).json({ message: "Please include the user's role_id" });
    } else if (data.role_id !== 1 || data.role_id !== 2) {
        res.status(400).json({ message: "Please use 1 or 2 for the user's role_id" });
    } else if (!data.email) {
        res.status(400).json({ message: "Please include the user's email" });
    } else if (!data.phone) {
        res.status(400).json({ message: "Please include the user's phone number" });
    } else if (!data.password) {
        res.status(400).json({ message: "Please include the user's password" });
    } else if (!data.org_name) {
        res.status(400).json({ message: "Please include the user's org_name" });
    } else {
        next()
    }
}

module.exports = validateRegister;