const http = require('http')
const https = require('https')
const url = require("url")
const EventEmitter = require('events')

const server = http.createServer()

let event = null
server.on('request', (req, res) => {
    const urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    if(urlObj.pathname == "/api") {
        event = new EventEmitter()
        event.on("getData", (data) => {
            res.end(data)
        })
        httpget()
    } else {
        res.end("111")
    }
    
})

function httpget() {
    let data = ""
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4` , (res)=>{
        res.on("data", (chunk) => {
            data += chunk
        })
        res.on("end", () => {
            // 采用事件触发的方式
            event.emit("getData", data)
        })
    })
}

server.listen(3000, () => {
    console.log('服务器启动成功')
})