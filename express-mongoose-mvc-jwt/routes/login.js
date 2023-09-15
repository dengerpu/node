var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: '登录' });
});

module.exports = router;
