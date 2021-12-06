var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('disciplina',{
      title: 'Disciplina - TEROS RC'
    });
  });

  module.exports = router;