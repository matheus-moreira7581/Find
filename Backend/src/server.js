const express = require("express");
const bcrypt = require("bcrypt");
const clientRoutes = require("./routes/client");
const addressRoutes = require("./routes/address");
const categoryRoutes = require("./routes/category");
const companyRoutes = require("./routes/company");
const productsRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const ordersRoutes = require("./routes/order");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(clientRoutes);
app.use(addressRoutes);
app.use(categoryRoutes);
app.use(companyRoutes);
app.use(productsRoutes);
app.use(authRoutes);
app.use(ordersRoutes);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
}

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor funcionando!"));