var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('administracion',{
      title: 'Administracion - TEROS RC',
    });
  });

  module.exports = router;