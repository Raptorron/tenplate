const express = require('express');
const router = express.Router();
const { User, Product, Company, Offering } = require('./db');

//////////////////////////** 1 **/////////////////////////////////////

router.get('/api/users', (req, res, next)=>{
  User.findAll()
    .then(item => res.send(item))
    .catch(next)
});

//////////////////////////** 2 **/////////////////////////////////////

router.get('/api/products', (req, res, next)=>{
  Product.findAll()
    .then(item => res.send(item))
    .catch(next)
});

router.get('/api/companies', (req, res, next)=>{
  Company.findAll()
    .then(item => res.send(item))
    .catch(next)
});

router.get('/api/offerings', (req, res, next)=>{
  Offering.findAll()
    .then(item => res.send(item))
    .catch(next)
});


module.exports = router;
