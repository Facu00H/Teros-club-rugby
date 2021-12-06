var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('valores',{
      title: 'Valores - TEROS RC'
    });
  });

  module.exports = router;