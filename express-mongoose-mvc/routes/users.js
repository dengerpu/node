var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel')
const UserController = require('../controller/UserController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 获取用户列表
router.get('/list', UserController.getUserList)
// 添加用户
router.post('/add', UserController.addUser);
// 修改用户
router.put('/edit/:id', UserController.editUser);
// 删除用户
router.delete('/delete/:id', UserController.deleteUser)


module.exports = router;
