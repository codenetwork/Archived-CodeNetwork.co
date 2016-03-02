var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.post('/', function (req, res) {
  console.log(req.body);

  console.log('POST request to the join-page');
  res.send('POST request to the join-page');
});

module.exports = router;