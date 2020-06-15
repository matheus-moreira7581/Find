const express = require('express');
const ClientsController = require('../controller/ClientsController');

const routes = express.Router();

//Cliente

routes.post('/client', ClientsController.create)
      .post('/login', ClientsController.login)
      .get('/clients', ClientsController.index)
      .get('/client/:id', ClientsController.show)
      .put('/client/:id', ClientsController.update)
      .delete('/client/:id', ClientsController.delete) 



module.exports = routes;