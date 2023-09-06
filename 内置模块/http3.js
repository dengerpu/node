const http = require('http')

const server = http.createServer((req, res) => {
    // req 接收浏览器传递过来的参数
    // res 返回渲染的内容

    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"})

    res.write('返回的内容一')
    res.write('返回的内容二')
    res.write(`
        <h1>在返回的Content-Type中指定text/html也可以识别标签</h1>
    `)
    // res.end() // end才会渲染结束
    res.end('end里面也可以返回内容')
});

server.listen(8000, ()=> {
    console.log('服务器启动成功')
})