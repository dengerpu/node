const express = require("express")

const app = express()
// // 同步： 输出结果  1 2 3
// app.use((req, res, next) => {
//     if(req.url == '/favicon.ico') return 
//     console.log('1')
//     next()
//     console.log('3')
//     res.send({
//         ok: 1
//     })
// })
// app.use((req, res) => {
//     console.log(2)
// })

// 异步 输出 1 2 4 3  (并且返回的内容是会立马渲染出来的)
app.use(async (req, res, next) => {
    if(req.url == '/favicon.ico') return 
    console.log(1)
    await next()
    console.log(4, res.token) // 4 undefined
    res.send({
        ok: 1
    })
})
app.use(async (req, res) => {
    console.log(2)
    await delay(5)
    res.token = 'asdafsdfsdfsdfsdfsdf'
    console.log(3)
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time * 1000)
    })
}


app.listen(3000, (req, res) => {
    console.log("服务器启动成功")
})