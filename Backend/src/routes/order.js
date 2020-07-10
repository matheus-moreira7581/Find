const express = require('express')
const OrdersController = require('../controller/OrdersController')

const routes = express.Router()

// Pedidos

/**
 * @swagger
 * /order:
 *  post:
 *    description: Criação de pedido
 *    responses:
 *      '200':
 *        description: Pedido realizado com sucesso
 */
routes.post('/order', OrdersController.create)
/**
 * @swagger
 * /orders/:id_company:
 *  get:
 *    description: Seleção de pedido
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/orders/:id_company', OrdersController.index)
/**
 * @swagger
 * /income/:id_company:
 *  get:
 *    description: Seleção de pedido
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/income/:id_company', OrdersController.indexForIncome)
/**
 * @swagger
 * /details:
 *  get:
 *    description: Seleção de pedido
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/details', OrdersController.show)
/**
 * @swagger
 * /details:
 *  put:
 *    description: Atualização de pedido
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */      
      .put('/details', OrdersController.update);


module.exports = routes;