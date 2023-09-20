const express = require('express');
const app = express();
const port = process.env.PORT || 4179;
const bodyParser = require('body-parser');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON data in the request body
app.use(bodyParser.json());

const productApiRouter = require('./routes/productApi');
const searchApiRouter = require('./routes/searchApi');
const categoryApiRouter = require('./routes/categoryApi');
const userApiRouter = require('./routes/userApi');
const orderApiRouter = require('./routes/orderApi');

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ecommerce', (req, res) => {
    res.render('ecommerce');
});

app.get('/ecommerce-two', (req, res) => {
    res.render('ecommerce-two');
});

// API PRODUCTS
app.use('/api/products', productApiRouter);

// API SEARCH
app.use('/api/search', searchApiRouter);

// API CATEGORIES
app.use('/api/categories', categoryApiRouter);

// API USERS 
app.use('/api/users', userApiRouter);

// API ORDERS
app.use('/api/orders', orderApiRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port} http://localhost:${port}/`);
});