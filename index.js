require("dotenv").config();

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
    res.status(200).json({ message: "I'm alive and well" });
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})              