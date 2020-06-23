const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

// Products

routes.post('/add', ProductsController.create)
      .get('/home/:id_company', ProductsController.index)
      .get('/company', ProductsController.show)






module.exports = routes;