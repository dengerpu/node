const http = require('http')
const url = require('url')

const server = http.createServer()

server.on("request", (req, res) => {
    console.log(url.parse(req.url))
    const path = req.url
    if(path === '/favicon.ico') return
    let html = ''
    switch(path) {
        case '/home': html = renderHtml(path); break;
        default: html = `<h1>not found</h1>`
    }
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8;"})
    res.end(html)
})

function renderHtml(path) {
    return `
        <h1>${path}</h1>
    `
}

server.listen(8000, () => {
    console.log("服务器启动成功")
})