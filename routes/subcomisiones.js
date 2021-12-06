var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('subcomisiones',{
      title: 'Subcomisiones - TEROS RC',
      isSubcomisiones: true
  });
  });

  module.exports = router;