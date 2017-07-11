// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/products
router.get('/', function (req, res) {
  db.Product.findAll().then(function (products) {
    res.json(products);
  });
});

router.get('/:id', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    if (product === null) {
      res.sendStatus(404);
    } else {
      res.json(product);
    }
  });
});

//POST: /api/products
router.post('/', function (req, res) {
  const product = db.Product.build(req, res);

  product.save().then(function (newProduct) {
    res.send(newProduct);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    product.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    if (product === null) {
      res.sendStatus(404);
    } else {
      product.destroy().then(function () {
        res.json(product);
      });
    }
  });
});


module.exports = router;
