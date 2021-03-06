// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/
router.get('/', function (req, res) {
  db.Customer.findAll().then(function (customers) {
    res.json(customers);
  });
});

router.get('/:id', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    if (customer === null) {
      res.sendStatus(404);
    } else {
      res.json(customer);
    }
  });
});

//POST: /api/customers
router.post('/', function (req, res) {
  const newCustomer = new db.Customer(req.body);

  newCustomer.save().then(function (customer) {
    res.status(201).json(customer);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    customer.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
}); 

// DELETE
router.delete('/:id', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    if (customer === null) {
      res.sendStatus(404);
    } else {
      customer.destroy().then(function () {
        res.json(customer);
      });
    }
  });
});


module.exports = router;

