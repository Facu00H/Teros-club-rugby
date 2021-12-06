var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('rugby',{
      title: 'Rugby - TEROS RC'
    });
  });

  module.exports = router;