const express = require("express");
const bcrypt = require("bcrypt");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Rotas

const clientRoutes = require("./routes/client");
const categoryRoutes = require("./routes/category");
const companyRoutes = require("./routes/company");
const productsRoutes = require("./routes/product");
const servicesRoutes = require("./routes/service");
const authRoutes = require("./routes/auth");
const ordersRoutes = require("./routes/order");
const requestRoutes = require("./routes/request");

//const cors = require("cors");

const app = express();

require('dotenv').config()
const bodyParser = require('body-parser')
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


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:3333"]
      }
    },
    apis: ['src/routes/*.js']
  };
  
  
  
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Initial route

app.get('/', function (req, res) {
    res.send('Find Api');
})


// Pegar um error - not Found

app.use((request, response, next) => {
    if(response.headersSent) {
        return next(error)
    }

    const error = new Error('Não encontrado')
    // response.status(500).send()
    next(error)

});

// Pegar todos os erros

app.use((error, request, response, next) => {
    if(response.headersSent) {
        return next(error)
    }

    let status = error.status || 500

    response.status(status).json({ error: error.message })

});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor funcionando!"));