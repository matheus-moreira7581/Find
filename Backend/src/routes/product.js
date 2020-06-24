const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

// Products

routes.post('/my-products', ProductsController.create)
      .get('/my-products/:id_company', ProductsController.index)
      .get('/company', ProductsController.show)
      .put('/my-products/:id', ProductsController.update)
      .delete('/my-products/:id', ProductsController.delete)





module.exports = routes;