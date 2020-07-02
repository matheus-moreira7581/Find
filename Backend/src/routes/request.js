const express = require('express')
const RequestsController = require('../controller/RequestsController')

const routes = express.Router()

// Requests

routes.post('/request', RequestsController.create)
      .get('/request/:id_company', RequestsController.index)
      //.get('/income/:id_company', RequestsController.indexForIncome)
      .get('/details/service', RequestsController.show)
      //.get('/time', RequestsController.getTime)
      .put('/details/service', RequestsController.update);





module.exports = routes;