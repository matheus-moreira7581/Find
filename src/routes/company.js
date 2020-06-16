const express = require('express');
const CompanyController = require('../controller/CompanyController');

const routes = express.Router();

//Company

routes.post('/company', CompanyController.create)
      .post('/login', CompanyController.login)
      .get('/company', CompanyController.index)
      .get('/company/:id', CompanyController.show)
      .put('/company/:id', CompanyController.update)
      .delete('/company/:id', CompanyController.delete) 



module.exports = routes;