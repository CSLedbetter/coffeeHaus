const express = require('express');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');
const saleRoute = require('./routes/sale');
const saleItemRoute = require('./routes/saleItem');

const db = require('./models');

const app = express();

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
// app.use('/api', require('./api'));
app.use('/api/customers', customerRoute);
app.use('/api/products', productRoute);
app.use('/api/sales', saleRoute);
app.use('/api/saleItems', saleItemRoute);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

module.exports = app;
