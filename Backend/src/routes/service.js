const express = require('express')
const ServicesController = require('../controller/ServicesController')

const routes = express.Router()

const uploadImages = require('../config/multer')

// Services

/**
 * @swagger
 * /my-services:
 *  post:
 *    description: Criação de serviços
 *    responses:
 *      '200':
 *        description: Criação realizada com sucesso
 */
routes.post('/my-services', uploadImages.single('img_url'), ServicesController.create)
/**
 * @swagger
 * /my-services/:id_company:
 *  get:
 *    description: Seleção de serviços
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/my-services/:id_company', ServicesController.index)
/**
 * @swagger
 * /company-service:
 *  get:
 *    description: Seleção de serviço
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/company-service', ServicesController.show)
/**
 * @swagger
 * /company/services/:id:
 *  get:
 *    description: Seleção de serviço
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/company/services/:id', ServicesController.getService)
/**
 * @swagger
 * /my-services/:id:
 *  put:
 *    description: Atualização de serviços
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */      
      .put('/my-services/:id', uploadImages.single('img_url'), ServicesController.update)
/**
 * @swagger
 * /my-services/:id:
 *  delete:
 *    description: Deletar serviço
 *    responses:
 *      '200':
 *        description: Deletado com sucesso
 */      
      .delete('/my-services/:id', ServicesController.delete)





module.exports = routes;