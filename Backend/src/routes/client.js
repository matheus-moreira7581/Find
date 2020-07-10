const express = require('express');
const ClientsController = require('../controller/ClientsController');

const routes = express.Router();

const uploadImages = require('../config/multer')

//Cliente

routes.post('/register-client', ClientsController.create)
      .get('/edit-client/:id', ClientsController.show)
      .put('/edit-client/:id', uploadImages.single('img_url'), ClientsController.update)
      .delete('/edit-client/:id', ClientsController.delete) 



module.exports = routes;