var express = require('express');
var router = express.Router();

var User = require('../models/user.model');

router.post('/', function (req, res) {
  console.log(req.body);

  var user = new User();

  user.name = {first: req.body.name.first, last: req.body.name.last};
  user.email = req.body.email;
  

  user.save(function(err){ if(err) throw err; });

  console.log('POST request to the join-page');
  res.send('POST request to the join-page');
});

module.exports = router;