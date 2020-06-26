const express = require('express')
const OrdersController = require('../controller/OrdersController')

const routes = express.Router()

// Requests

routes.post('/request', OrdersController.create)
      .get('/orders/:id_company', OrdersController.index)
      .get('/details', OrdersController.show)





module.exports = routes;