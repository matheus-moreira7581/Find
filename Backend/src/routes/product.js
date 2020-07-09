const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

const uploadImages = require('../config/multer')

// Products

routes.post('/my-products', uploadImages.single('img_url'), ProductsController.create)
      .get('/my-products/:id_company', ProductsController.index)
      .get('/company', ProductsController.show)
      .get('/company/products/:id', ProductsController.getProduct)
      .put('/my-products/:id', uploadImages.single('img_url'), ProductsController.update)
      .delete('/my-products/:id', ProductsController.delete)





module.exports = routes;