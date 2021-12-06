var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('infraestructura',{
      title: 'Infraestructura - TEROS RC'
    });
  });

  module.exports = router;