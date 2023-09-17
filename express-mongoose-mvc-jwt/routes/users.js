var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel')
const UserController = require('../controller/UserController')

// 上传文件
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 获取用户列表
 * @api {post} /api/user/list list
 * @apiName list
 * @apiGroup userGroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * @apiParam  {File} avator 头像
 * 
 * @apiSuccess (0) {Number} code 失败
 * @apiSuccess (1) {Number} code 成功
 * @apiSuccess (3) {Number} code 没有权限
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     username : "admin",
 *     password : "123",
 *     age : 12,
 *     avator : File,
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     code: 1,
 *     success: true,
 *     msg: '请求成功'
 * }
 * 
 * 
 */
router.get('/list', UserController.getUserList)
// 添加用户
router.post('/form/add', upload.single("avator"), UserController.addUser);
// 修改用户
router.put('/edit/:id', UserController.editUser);
/**
 * 
 * @api {delete} /api/user/delete deleteUser
 * @apiName deleteUser
 * @apiGroup userGroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {NUmber} id 要删除的id
 * 
 * @apiSuccess (0) {Number} code 失败
 * @apiSuccess (1) {Number} code 成功
 * @apiSuccess (3) {Number} code 没有权限
 * 
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     code: 1,
 *     success: true,
 *     msg: '请求成功'
 * }
 * 
 * 
 */
router.delete('/delete/:id', UserController.deleteUser)
// 用户登录
router.post('/login', UserController.login)
// 退出登陆
// router.get('/logout', UserController.logout)


module.exports = router;
