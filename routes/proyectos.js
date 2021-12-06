var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('proyectos',{
      title: 'Proyectos - TEROS RC'
    });
  });

  module.exports = router;