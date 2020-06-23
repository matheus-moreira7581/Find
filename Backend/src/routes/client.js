const express = require('express');
const ClientsController = require('../controller/ClientsController');

const routes = express.Router();

//Cliente

routes.post('/register', ClientsController.create)
      //.post('/login', ClientsController.login)
      .get('/clients', ClientsController.index)
      .get('/edit/:id', ClientsController.show)
      .put('/edit/:id', ClientsController.update)
      .delete('/edit/:id', ClientsController.delete) 



module.exports = routes;