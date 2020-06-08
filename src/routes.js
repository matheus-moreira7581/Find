const express = require('express');
const knex = require('./database');

const ClientsController = require('./controller/ClientsController');

const routes = express.Router();


routes.get('/clients', ClientsController.index)






module.exports = routes;