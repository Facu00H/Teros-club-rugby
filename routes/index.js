var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Home - TEROS RC',
      isHome: true
    });
  });

  module.exports = router;