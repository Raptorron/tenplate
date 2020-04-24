const express = require('express');
const router = express.Router();
const { User } = require('./db');


router.get('/api/users', (req, res, next)=>{
  User.findAll()
    .then(item => res.send(item))
    .catch(next)
});

module.exports = router;
