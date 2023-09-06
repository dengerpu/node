const http = require('http')
const url = require('url')

const server = http.createServer()

server.on('request', (req, res) => {
    const urlObj = url.parse(req.url, true)
    console.log(urlObj.query.callback)
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"})
    if(urlObj.pathname == "/api") {
        res.end(`
            ${urlObj.query.callback} ( {"name": "jsonp"} )
        `
        )
    } else {
        res.end("响应成功")
    }   
})

server.listen(3000, () => {
    console.log('服务器启动成功')
})