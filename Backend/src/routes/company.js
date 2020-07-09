const express = require('express');
const CompanyController = require('../controller/CompanyController');

const routes = express.Router();

const uploadImages = require('../config/multer')

//Company

routes.post('/register-company', CompanyController.create)
      .get('/companies', CompanyController.index)
      .get('/edit-company/:id', CompanyController.show)
      .put('/edit-company/:id', uploadImages.single('img_url'), CompanyController.update)
      .put('/edit-company/status/:id', CompanyController.updateStatus)
      .delete('/edit-company/:id', CompanyController.delete) 



module.exports = routes;