// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/saleItems
router.get('/', function (req, res) {
  db.SaleItem.findAll().then(function (saleItems) {
    res.json(saleItems);
  });
});

router.get('/:id', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    if (saleItem === null) {
      res.sendStatus(404);
    } else {
      res.json(saleItem);
    }
  });
});

//POST: /api/saleItems
router.post('/', function (req, res) {
  const saleItem = db.SaleItem.build(req, res);

  saleItem.save().then(function (newSaleItem) {
    res.send(newSaleItem);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    saleItem.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    if (saleItem === null) {
      res.sendStatus(404);
    } else {
      saleItem.destroy().then(function () {
        res.json(saleItem);
      });
    }
  });
});


module.exports = router;
