const express = require('express')
const ProductsController = require('../controller/ProductsController')

const routes = express.Router()

const uploadImages = require('../config/multer')

// Produtos


/**
 * @swagger
 * /my-products:
 *  post:
 *    description: Criação de produto
 *    responses:
 *      '200':
 *        description: Criação realizada com sucesso
 */
routes.post('/my-products', uploadImages.single('img_url'), ProductsController.create)
/**
 * @swagger
 * /my-products/:id_company:
 *  get:
 *    description: Seleção de produtos de uma determinada empresa
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */
      .get('/my-products/:id_company', ProductsController.index)
/**
 * @swagger
 * /company:
 *  get:
 *    description: Seleção de produto específico
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/company', ProductsController.show)
/**
 * @swagger
 * /company/products/:id:
 *  get:
 *    description: Seleção de produto
 *    responses:
 *      '200':
 *        description: Seleção realizada com sucesso
 */      
      .get('/company/products/:id', ProductsController.getProduct)
/**
 * @swagger
 * /my-products/:id:
 *  put:
 *    description: Atualização de produto
 *    responses:
 *      '201':
 *        description: Atualização realizada com sucesso
 */      
      .put('/my-products/:id', uploadImages.single('img_url'), ProductsController.update)
/**
 * @swagger
 * /my-products/:id:
 *  delete:
 *    description: Deletar produto
 *    responses:
 *      '200':
 *        description: Produto deletado com sucesso
 */      
      .delete('/my-products/:id', ProductsController.delete)



module.exports = routes;