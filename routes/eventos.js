var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('eventos',{
      title: 'Eventos - TEROS RC'
    });
  });

  module.exports = router;