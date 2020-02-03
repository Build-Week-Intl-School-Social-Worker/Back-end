const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization;

  if (token) {
    jwt.verify(token, "secret", (err, token) => {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = token;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "You are not logged in" });
  }
};

module.exports = restricted;