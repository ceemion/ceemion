var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'CeeMion' });
});

/* GET blog. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

module.exports = router;
