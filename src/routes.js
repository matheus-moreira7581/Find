const express = require('express');
//const knex = require('./database');

const ClientsController = require('./controller/ClientsController');
//const AddressesController = require('./controller/AddressesController');

const routes = express.Router();


routes.get('/clients', ClientsController.index)
      .post('/clients', ClientsController.create)

      

module.exports = routes;