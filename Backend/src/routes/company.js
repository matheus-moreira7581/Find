const express = require('express');
const CompanyController = require('../controller/CompanyController');

const routes = express.Router();

//Company

routes.post('/company/:id_categories', CompanyController.create)
      .post('/company_login', CompanyController.login)
      .get('/company', CompanyController.index)
      .get('/company/:id', CompanyController.show)
      .put('/company/:id', CompanyController.update)
      .delete('/company/:id', CompanyController.delete) 



module.exports = routes;