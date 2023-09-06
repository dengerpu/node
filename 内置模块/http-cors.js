const http = require('http')
const url = require('url')

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    res.end(JSON.stringify({
        name: "zhangsan",
        age: 18
    }))
})

server.listen(3000, () => {
    console.log('服务器启动成功')
})