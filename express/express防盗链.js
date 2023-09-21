const express = require('express')

const app = express()

// 防盗链
app.use((req, res, next) => {
    // 检测请求头中的referer是否为127.0.0.1
    // 获取 referer
    let referer = req.get('referer')
    if(referer) {
        // 实例化
        let url = new URL(referer)
        // 获取hostname
        let hostname = url.hostname
        console.log(hostname)
        if(hostname !== '127.0.0.1') {
            console.log('执行了终止');
            res.status(404).send('<h1>not found</h1>');
            return; 
        }
    }
    next()
})

// 静态资源管理
app.use(express.static('public'))


app.listen(3000, () => {
    console.log('server start')
})