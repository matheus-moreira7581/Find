const express = require('express');
const AuthController = require('../controller/AuthController');

const routes = express.Router();

//Company

routes.post('/auth', AuthController.login)
       

module.exports = routes;