var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('deportes',{
      title: 'Deportes - TEROS RC',
      isDeportes: true
    });
  });

  module.exports = router;