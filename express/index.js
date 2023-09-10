const express = require('express')

const app = express()

// 原来的res.write和end还是可以用的
// app.get('/', (req, res) => {
//     res.write('123')
//     res.end()
// })
app.get('/', (req, res) => {
    res.send('123')
})

app.get('/info', (req, res, next) => {
    console.log('token校验')
    let isValid = true
    if (isValid) {
        next() // 放行
    } else {
        res.end('token校验失败')
    }
}, (req, res) => {
    res.send('查询成功')
})

function cb1(req, res, next) {
    console.log('cb1')
    next()
}
function cb2(req, res, next) {
    console.log('cb2')
    next()
}
function cb3(req, res, next) {
    console.log('cb3')
    res.send('cb3')
}

app.get('/abc', [cb1, cb2, cb3])

app.get('/abcd',[cb1, cb2], (req, res, next) => {
    console.log('cb4')
    next()
}, (req, res) => {
    res.send('cb5')
})

app.listen(3000, () => {
    console.log('server start')
})