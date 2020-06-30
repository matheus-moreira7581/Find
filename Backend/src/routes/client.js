const express = require('express');
const ClientsController = require('../controller/ClientsController');

const routes = express.Router();

//Cliente

routes.post('/register-client', ClientsController.create)
      .get('/clients', ClientsController.index)
      .get('/edit-client/:id', ClientsController.show)
      .put('/edit-client/:id', ClientsController.update)
      .delete('/edit-client/:id', ClientsController.delete) 



module.exports = routes;