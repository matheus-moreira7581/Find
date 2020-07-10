const express = require('express');
const CategoriesController = require('../controller/CategoriesController');

const routes = express.Router();

//Categorias

/**
 * @swagger
 * /home-client:
 *  get:
 *    description: Seleção de categorias
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
routes.get('/home-client', CategoriesController.index)
/**
 * @swagger
 * /register-company:
 *  get:
 *    description: Listagem de categorias
 *    responses:
 *      '200':
 *        description: Listagem realizada com sucesso
 */
      .get('/register-company', CategoriesController.listCategories)


module.exports = routes;