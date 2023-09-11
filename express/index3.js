const express = require('express')
const apiRoutes = require('./route2/apiRoute')
const indexRoutes = require('./route/IndexRoute')

const app = express()

// 静态资源管理
app.use(express.static('public'))
app.use(express.static('static'))

// 模版引擎管理
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false})) // (Content-Type: application/x-www-form-urlencoded)post参数- username=kerwin&password=1234
app.use(express.json()) // post参数- {name:"",age:100}


// 在这上面的请求不受这个中间件影响
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use((req, res, next) => {
    // 可以用来判断token信息等
    console.log('应用中间件--每个请求都会执行这个' + Date.now())
    next()
})

app.use('/', indexRoutes)
app.use('/api', apiRoutes)

// 错误处理中间件
app.use((req, res) => {
    res.status(404).send('错误')
})
// 官方给的是这个例子，这个是程序发生错误才会执行，上面这个是找不到接口就会执行
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('错误的请求')
})

app.listen(3000, () => {
    console.log('server start')
})