const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

// Products

routes.post('/add-product', ProductsController.create)
      .get('/home-company/:id_company', ProductsController.index)
      .get('/company', ProductsController.show)
      .put('home-company/:id_company', ProductsController.update)
      .delete('/products/:id', ProductsController.delete)





module.exports = routes;