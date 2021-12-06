var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('fiestas',{
      title: 'Fiestas - TEROS RC'
    });
  });

  module.exports = router;