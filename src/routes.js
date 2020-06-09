const express = require('express');

const ClientsController = require('./controller/ClientsController');
const AddressesController = require('./controller/AddressesController');


const routes = express.Router();

//Cliente

routes.get('/clients', ClientsController.index)
      .post('/clients', ClientsController.create)
      .get('/client/:id', ClientsController.show)


//Endereço
routes.post('/address/:id', AddressesController.create)

      

module.exports = routes;