const express = require('express');
const AuthController = require('../controller/AuthController');

const routes = express.Router();

//Authentication

routes.post('/login', AuthController.login)
       

module.exports = routes;