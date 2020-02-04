require("dotenv").config();

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`<h2>I'm alive and well!</h2>`);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})              