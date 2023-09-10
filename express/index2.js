const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('首页')
})

app.get('/login', (req, res) => {
    res.send('登陆')
})


// 在这上面的请求不受这个中间件影响
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use((req, res, next) => {
    // 可以用来判断token信息等
    console.log('应用中间件--每个请求都会执行这个' + Date.now())
    next()
})

app.get('/abc', (req, res) => {
    res.send('abc')
})

app.listen(3000, () => {
    console.log('server start')
})