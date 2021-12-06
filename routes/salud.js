var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('salud',{
      title: 'Salud - TEROS RC'
    });
  });

  module.exports = router;