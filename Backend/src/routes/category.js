const express = require('express');
const CategoriesController = require('../controller/CategoriesController');

const routes = express.Router();

//Categorias

routes.get('/', CategoriesController.index);


module.exports = routes;