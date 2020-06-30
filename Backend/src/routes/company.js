const express = require('express');
const CompanyController = require('../controller/CompanyController');

const routes = express.Router();

//Company

routes.post('/register-company', CompanyController.create)
      .get('/companies', CompanyController.index)
      .get('/edit-company/:id', CompanyController.show)
      .put('/edit-company/:id', CompanyController.update)
      .delete('/edit-company/:id', CompanyController.delete) 



module.exports = routes;