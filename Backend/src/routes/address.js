const express = require('express');
const AddressesController = require('../controller/AddressesController');


const routes = express.Router();


//Endereço

routes.post('/add-address/:id_clients', AddressesController.create)
      .get('/add-address/:id_clients', AddressesController.show)
      .get('/addresses', AddressesController.index)
      
      

module.exports = routes;