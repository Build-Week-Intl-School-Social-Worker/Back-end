const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// imports
const authRouter = require('../auth/authRouter');
const studentsRouter = require('../students/studentsRouter');
const rolesRouter = require('../roles/rolesRouter');

// global middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes
server.use("/", authRouter);
server.use("/api/roles", rolesRouter);
server.use("api/students", studentsRouter);

module.exports = server;
