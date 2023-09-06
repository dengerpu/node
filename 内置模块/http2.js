const http = require('http')

// 创建本地服务器来从其接收数据
const server = http.createServer()

// 监听请求事件
server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        data: 'Hello World!!!'
    }));
})

server.listen(8000)
console.log('服务器启动成功')