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

//const cors = require("cors");
const uploadImages = require('./images/multer')
const cloudinary = require('./images/cloudinary')
const fs = require('fs')

const app = express();

require('dotenv').config()


//Upload de imagens Inicio
const bodyParser = require('body-parser')
const { restart } = require('nodemon')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/upload-images',uploadImages.array('image'), async(request, response) => {

    const uploader = async (path) => await cloudinary.uploads(path,'Images')

    if(request.method === 'POST')
    {
        const urls = []

        const files = request.files

        for (const file of files) {
            
            const {path} = file

            const newPath = await uploader(path)

            urls.push(newPath)

            fs.unlinkSync(path)
        }

        response.status(200).json({
            message:'Imagem carregada com sucesso',
            data:urls
        })
    }else{
        response.status(405).json({
            err:"Imagem não carregada"
        })
    }
})

//Upload de imagens Fim


//app.use(cors());
app.use(express.json())
app.use(clientRoutes)
app.use(categoryRoutes)
app.use(companyRoutes)
app.use(productsRoutes)
app.use(servicesRoutes)
app.use(authRoutes)
app.use(ordersRoutes)
// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);

app.get('/', function (req, res) {
    res.send('Find Api');
  })

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  }

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).json({ error: 'Algo está errado!' });
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500).json({ error: err });
}

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