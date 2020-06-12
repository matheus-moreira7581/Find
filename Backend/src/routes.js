const express = require('express');

const ClientsController = require('./controller/ClientsController');
const AddressesController = require('./controller/AddressesController');


const routes = express.Router();

//Cliente

routes.post('/clients', ClientsController.create)
      .post('/client/:name', ClientsController.login)
      .get('/clients', ClientsController.index)
      .get('/client/:id', ClientsController.show)
      .put('/client/:id', ClientsController.update)
      .delete('/client/:id', ClientsController.delete) 


//Endereço

routes.post('/address/:id_clients', AddressesController.create)
      .get('/address/:id_clients', AddressesController.show)
      .get('/address', AddressesController.index)
      
      

module.exports = routes;