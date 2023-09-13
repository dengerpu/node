var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res) {
  const {page, limit} = req.query
  UserModel.find({}, ["username", "age"]).sort({age: -1}).skip((page - 1) * limit).limit(limit)
  .then(data => {
    res.send({
      code: 1,
      data,
      msg: '获取成功'
    })
  }).catch({
    code: 0,
    data: '',
    msg: '获取失败'
  })

})

router.post('/add', function(req, res, next) {
  const {username, password, age} = req.body
  UserModel.create({
    // username: username, password: password, age: age
    username, password, age
  }).then(data => {
    console.log(data)
    res.send({
      code: 1,
      msg: '添加成功'
    })
  }).catch(err => {
    console.log(err)
    res.send({
      code: 1,
      msg: '添加失败'
    })
  })
});

router.post('/edit/:id', function(req, res, next) {
  const {username, age} = req.body
  UserModel.updateOne({_id: req.params.id}, {
    username, age
  }).then(data => {
    console.log(data)
    res.send({
      code: 1,
      msg: '修改成功'
    })
  }).catch(err => {
    console.log(err)
    res.send({
      code: 1,
      msg: '修改失败'
    })
  })
});

router.get('/delete/:id', (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id
  }).then(data => {
    res.send({
      code: 1,
      msg: '删除成功'
    })
  }).catch(err => {
    console.log(err)
    res.send({
      code: 1,
      msg: '删除失败'
    })
  })
})


module.exports = router;
