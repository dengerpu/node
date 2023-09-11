const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
    res.send('/')
})

route.get('/home', (req, res) => {
    // res.send('/home')
    let title = "模版引擎渲染"
    let list = ['111', '222', '333']
    let html = '<b>我是加粗的文字<%-%>会识别html</b>'
    res.render('home', {title: title, list: list, html: html})
})
route.get('/login', (req, res) => {
    res.render('login',{message: ''})
})

route.post('/login', (req, res) => {
    if(req.body.username == 'dep' && req.body.password == '123456') {
        // 重定向
        res.redirect('/home')
    } else {
        res.render('login', {message: '账号或密码错误，登录失败'})
    }
})

module.exports = route