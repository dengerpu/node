var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('upload-form', { title: '上传' });
});

module.exports = router;
