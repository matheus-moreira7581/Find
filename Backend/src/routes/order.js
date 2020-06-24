const express = require('express')
const OrdersController = require('../controller/OrdersController')

const routes = express.Router()

// Requests

routes.post('/request', OrdersController.create)





module.exports = routes;