const express = require('express');
const CompanyController = require('../controller/CompanyController');

const routes = express.Router();

const uploadImages = require('../config/multer')

//Empresa

/**
 * @swagger
 * /register-company:
 *  post:
 *    description: Registro de empresa
 *    responses:
 *      '200':
 *        description: Registro realizado com sucesso
 */
routes.post('/register-company', CompanyController.create)
/**
 * @swagger
 * /companies:
 *  get:
 *    description: Seleção de empresas
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/companies', CompanyController.index)
/**
 * @swagger
 * /edit-company/:id:
 *  get:
 *    description: Seleção de empresa específica
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/edit-company/:id', CompanyController.show)
/**
 * @swagger
 * /edit-company/:id:
 *  put:
 *    description: Atualização de empresa
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */
      .put('/edit-company/:id', uploadImages.single('img_url'), CompanyController.update)
/**
 * @swagger
 * /edit-company/status/:id:
 *  put:
 *    description: Atualização de status da empresa
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */
      .put('/edit-company/status/:id', CompanyController.updateStatus)
/**
 * @swagger
 * /edit-company/:id:
 *  delete:
 *    description: Deletar empresa
 *    responses:
 *      '200':
 *        description: Empresa deletada com sucesso
 */
      .delete('/edit-company/:id', CompanyController.delete) 



module.exports = routes;