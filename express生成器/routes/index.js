var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 获取前端的cookie
  console.log(req.cookies)
  // 设置前端的cookie
  res.cookie('name', '123')
  res.render('index', { title: 'Express' });
});

module.exports = router;
