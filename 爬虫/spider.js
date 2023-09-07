const http = require('http')
const https = require('https')
const url = require('url')
const cheerio = require('cheerio')

const server = http.createServer()

server.on("request", (req, res) => {
    const urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    if(urlObj.pathname === "/api") {
        spider((data) => {
            res.end(data)
        })
    } else {
        res.end('响应成功')
    }
})

function spider(cb) {
    const options = {
        protocol: 'https:',
        hostname: 'i.maoyan.com',
        port: 443,
        path: '/',
        method: 'GET'
    }
    let data = ''
    const req = https.request(options, (res) => {
        res.on("data", chunk => {
            data += chunk
        })
        res.on("end", () => {
            // console.log(data)
            getData(data)
        })
    })
    function getData(data) {
        console.log(data)
        let $ = cheerio.load(data)
        let $movelist = $(".column.content")
        let movies = []
        $movelist.each((index, value) => {
            movies.push({
                title: $(value).find('.movie-title .title').text(),
                grade: $(value).find('.detail .score .grade').text(),
                detail: $(value).find('.detail .actor').text()
            })
        })
        cb(JSON.stringify(movies))
    }
    req.end()
}

server.listen(3000, () => {
    console.log("服务器启动成功")
})