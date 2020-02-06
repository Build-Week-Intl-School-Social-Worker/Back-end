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
const visitsRouter = require('../visits/visitsRouter');

// global middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes
server.use("/auth", authRouter);
server.use("/api/roles", rolesRouter);
server.use("/api/users", usersRouter);
server.use("/api/students", studentsRouter);
server.use("/api/visits", visitsRouter);

module.exports = server;
