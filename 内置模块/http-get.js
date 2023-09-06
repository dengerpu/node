const http = require('http')
const https = require('https')
const url = require("url")

const server = http.createServer()

server.on('request', (req, res) => {
    const urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    if(urlObj.pathname == "/api") {
        httpget((data) => {
            res.end(data)
        })
    } else {
        res.end("111")
    }
    
})

function httpget(cb) {
    let data = ""
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4` , (res)=>{
        res.on("data", (chunk) => {
            data += chunk
        })
        res.on("end", () => {
            console.log(data)
            cb(data) // 获取完毕之后执行回调函数，也可以把response传进来，抓取完毕之后response.end(data)
        })
    })
}

server.listen(3000, () => {
    console.log('服务器启动成功')
})