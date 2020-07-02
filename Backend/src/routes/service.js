const express = require('express')
const ServicesController = require('../controller/ServicesController')

const routes = express.Router()

// Products

routes.post('/my-services', ServicesController.create)
      .get('/my-services/:id_company', ServicesController.index)
      .get('/company-service', ServicesController.show)
      .get('/company/services/:id', ServicesController.getService)
      .put('/my-services/:id', ServicesController.update)
      .delete('/my-services/:id', ServicesController.delete)





module.exports = routes;