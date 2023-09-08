const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()
http.createServer((req, res) => {
    // res本身也是流
    const readStream = fs.createReadStream('./index.html')
    res.writeHead(200, {
        "Content-Type": "application/x-javascript;charset=utf-8;",
        "Content-Encoding": "gzip"
    })
    readStream.pipe(gzip).pipe(res)
}).listen(3000, () => {
    console.log("服务器启动成功")
})