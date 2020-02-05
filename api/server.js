const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// imports
const authRouter = require('../auth/authRouter');
const studentsRouter = require('../students/studentsRouter');
const rolesRouter = require('../roles/rolesRouter');
const usersRouter = require('../users/usersRouter');
const authenticate = require('../auth/authenticate');
const stripPasswords = require('../middlewares/stripPasswords');

// global middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes
server.use("/auth", authRouter);
server.use("/api/roles", rolesRouter);
server.use("/api/users", usersRouter);
server.use("/api/students", authenticate, studentsRouter);

module.exports = server;
