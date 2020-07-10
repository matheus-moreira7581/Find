const express = require('express')
const RequestsController = require('../controller/RequestsController')

const routes = express.Router()

// Requisições


/**
 * @swagger
 * /request:
 *  post:
 *    description: Criação do carrinho
 *    responses:
 *      '200':
 *        description: Criação realizada com sucesso
 */
routes.post('/request', RequestsController.create)
/**
 * @swagger
 * /request/:id_company:
 *  get:
 *    description: Seleção do carrinho
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/request/:id_company', RequestsController.index)
/**
 * @swagger
 * /request/:id_company:
 *  get:
 *    description: Finalizar pedido
 *    responses:
 *      '200':
 *        description: Finalização realizada com sucesso
 */
      .get('/income/request/:id_company', RequestsController.indexForIncome)
/**
 * @swagger
 * /request/:id_company:
 *  get:
 *    description: Detalhes do serviço
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