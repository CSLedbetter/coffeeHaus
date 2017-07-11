const express = require('express');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer.route');
const productRoute = require('./routes/product.route');
const saleRoute = require('./routes/sale.route');
const saleItemRoute = require('./routes/saleItem.route');

const db = require('./models');

const app = express();

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
// app.use('/api', require('./api'));
app.use('/api/customer', customerRoute);
app.use('/api/product', productRoute);
app.use('/api/sale', saleRoute);
app.use('/api/saleItem', saleItemRoute);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
