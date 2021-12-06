var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('hockey',{
      title: 'Hockey - TEROS RC'
    });
  });

  module.exports = router;