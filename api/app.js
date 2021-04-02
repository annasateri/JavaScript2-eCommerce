const express = require('express');
const app = express();
const cors = require('cors');

//  Importera
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');


app.use(cors());

// för att vi ska kunna använda JSON
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


// Controllers
app.use('/api/products', productController);
app.use('/api/users', userController);
app.use('/api/orders', orderController);

module.exports = app;

