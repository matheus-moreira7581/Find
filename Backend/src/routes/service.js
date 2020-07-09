const express = require('express')
const ServicesController = require('../controller/ServicesController')

const routes = express.Router()

const uploadImages = require('../config/multer')

// Services

routes.post('/my-services', uploadImages.single('img_url'), ServicesController.create)
      .get('/my-services/:id_company', ServicesController.index)
      .get('/company-service', ServicesController.show)
      .get('/company/services/:id', ServicesController.getService)
      .put('/my-services/:id', uploadImages.single('img_url'), ServicesController.update)
      .delete('/my-services/:id', ServicesController.delete)





module.exports = routes;