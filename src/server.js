const express = require('express');
const routes = require('./routes');
const cors = require ('cors');

const server = express();

// Settings.
server.use(express.json());
server.use(cors());

// Routes.
server.use(routes.book);

// Public folder.

module.exports = server;
