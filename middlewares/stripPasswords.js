const stripPasswords = (req, res, next) => {
    if (req.method === "GET") {
        console.log(res);
    }
    next();
}

module.exports = stripPasswords;