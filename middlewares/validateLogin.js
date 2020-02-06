const validateLogin = (req, res, next) => {
    const data = req.body;
    if (!data) {
        res.status(400).json({ message: "Must include user login info" });
    } else if (!data.email) {
        res.status(400).json({ message: "Please include the user's email" });
    } else if (!data.password) {
        res.status(400).json({ message: "Please include the user's password" });
    } else {
        next()
    }
}

module.exports = validateLogin;