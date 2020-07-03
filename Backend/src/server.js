const express = require("express");
const bcrypt = require("bcrypt");

//Rotas
const clientRoutes = require("./routes/client");
const categoryRoutes = require("./routes/category");
const companyRoutes = require("./routes/company");
const productsRoutes = require("./routes/product");
const servicesRoutes = require("./routes/service");
const authRoutes = require("./routes/auth");
const ordersRoutes = require("./routes/order");
const requestRoutes = require("./routes/request");

/*const cors = require("cors");
const uploadImages = require('./config/multer')
const cloudinary = require('./config/cloudinary')
const fs = require('fs')*/

const app = express();

require('dotenv').config()
const bodyParser = require('body-parser')
//const { restart } = require('nodemon')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


//app.use(cors());
app.use(express.json())
app.use(clientRoutes)
app.use(categoryRoutes)
app.use(companyRoutes)
app.use(productsRoutes)
app.use(servicesRoutes)
app.use(authRoutes)
app.use(ordersRoutes)
app.use(requestRoutes)


// Initial route
app.get('/', function (req, res) {
    res.send('Find Api');
  })

// not Found

app.use((request, response, next) => {
    if(response.headersSent) {
        return next(error)
    }

    const error = new Error('Não encontrado')
    // response.status(500).send()
    next(error)

});

// pegar todos os erros

app.use((error, request, response, next) => {
    if(response.headersSent) {
        return next(error)
    }

    let status = error.status || 500

    response.status(status).json({ error: error.message })

});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor funcionando!"));