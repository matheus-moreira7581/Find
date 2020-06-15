const express = require('express');
const AddressesController = require('../controller/AddressesController');


const routes = express.Router();


//Endereço

routes.post('/address/:id_clients', AddressesController.create)
      .get('/address/:id_clients', AddressesController.show)
      .get('/address', AddressesController.index)
      
      

module.exports = routes;