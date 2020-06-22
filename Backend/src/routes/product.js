const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

// Products

routes.post('/add', ProductsController.create)







module.exports = routes;