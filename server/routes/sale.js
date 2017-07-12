// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/sales
router.get('/', function (req, res) {
  db.Sale.findAll().then(function (sales) {
    res.json(sales);
  });
});

router.get('/:id', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    if (sale === null) {
      res.sendStatus(404);
    } else {
      res.json(sale);
    }
  });
});

//POST: /api/sales
router.post('/', function (req, res) {
  const sale = db.Sale.build(req.body);

  sale.save().then(function (newSale) {
     res.status(201).json(newSale);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    sale.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    if (sale === null) {
      res.sendStatus(404);
    } else {
      sale.destroy().then(function () {
        res.json(sale);
      });
    }
  });
});


module.exports = router;
