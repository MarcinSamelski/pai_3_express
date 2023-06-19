var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', { title: 'O nas', message: 'Informacje o naszej firmie' });
});

module.exports = router;
