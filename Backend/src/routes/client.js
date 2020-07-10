const express = require('express');
const ClientsController = require('../controller/ClientsController');

const routes = express.Router();

const uploadImages = require('../config/multer')

//Cliente

/**
 * @swagger
 * /register-client:
 *  post:
 *    description: Registro de clientes
 *    responses:
 *      '200':
 *        description: Registro realizada com sucesso
 */
routes.post('/register-client', ClientsController.create)
      .get('/edit-client/:id', ClientsController.show)
/**
 * @swagger
 * /edit-client/:id:
 *  put:
 *    description: Atualização de cliente
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */
      .put('/edit-client/:id', uploadImages.single('img_url'), ClientsController.update)
/**
 * @swagger
 * /edit-client/:id:
 *  delete:
 *    description: Deletar cliente
 *    responses:
 *      '200':
 *        description: Deletado com sucesso
 */
      .delete('/edit-client/:id', ClientsController.delete) 



module.exports = routes;