const express = require('express');
const CategoriesController = require('../controller/CategoriesController');

const routes = express.Router();

//Categorias

routes.get('/', CategoriesController.index)
      .get('/register-company', CategoriesController.listCategories)


module.exports = routes;