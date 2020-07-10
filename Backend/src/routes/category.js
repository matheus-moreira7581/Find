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
 *    description: Registro de compania
 *    responses:
 *      '200':
 *        description: Registro realizada com sucesso
 */
      .get('/register-company', CategoriesController.listCategories)


module.exports = routes;