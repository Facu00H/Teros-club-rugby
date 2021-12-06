var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('sponsors',{
      title: 'Sponsors - TEROS RC'
    });
  });

  module.exports = router;