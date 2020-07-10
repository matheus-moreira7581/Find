const express = require('express')
const RequestsController = require('../controller/RequestsController')

const routes = express.Router()

// Requests


/**
 * @swagger
 * /request:
 *  post:
 *    description: Criação de serviços
 *    responses:
 *      '200':
 *        description: Criação realizada com sucesso
 */
routes.post('/request', RequestsController.create)
/**
 * @swagger
 * /request/:id_company:
 *  get:
 *    description: Seleção de serviços
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/request/:id_company', RequestsController.index)
    //.get('/income/:id_company', RequestsController.indexForIncome)
/**
 * @swagger
 * /details/service:
 *  get:
 *    description: Seleção de serviço
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/details/service', RequestsController.show)
/**
 * @swagger
 * /time:
 *  get:
 *    description: Seleção de horário
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/time', RequestsController.getTime)
/**
 * @swagger
 * /details/service:
 *  put:
 *    description: Atualização de serviço
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */      
      .put('/details/service', RequestsController.update);





module.exports = routes;