const express = require('express');
const helmet = require('helmet');

const server = express();

// imports
const studentsRouter = require('../students/studentsRouter');

// global middlewares
server.use(helmet());
server.use(express.json());

// routes
server.use("api/students", studentsRouter);

module.exports = server;
