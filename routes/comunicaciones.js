var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('comunicaciones',{
      title: 'Comunicacions - TEROS RC'
    });
  });

  module.exports = router;