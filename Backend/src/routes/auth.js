const express = require('express');
const AuthController = require('../controller/AuthController');

// Routes

const routes = express.Router();

//Authentication

/**
 * @swagger
 * /auth:
 *  post:
 *    description: Autenticação de usuários
 *    responses:
 *      '200':
 *        description: Autenticação realizada com sucesso
 */
routes.post('/auth', AuthController.login)
       

module.exports = routes;