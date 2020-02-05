const stripPasswords = (req, res, next) => {
    if (req.method === "POST") {
        const data = req.body;
        if(data.password) {
            data.password = null;
        }
        console.log(data);
    }
    next();
}

module.exports = stripPasswords;