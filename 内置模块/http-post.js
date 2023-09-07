const http = require('http')
const https = require('https')
const url = require('url')

const server = http.createServer()

server.on("request", (req, res) => {
    const urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    if (urlObj.pathname == "/api") {
        httpPost((data) => {
            res.end(data)
        })
    } else {
        res.end("111")
    }

})

function httpPost(cb) {
    var data = ""
    const options = {
        protocol: 'https:',
        hostname: 'm.xiaomiyoupin.com',
        method: 'POST',
        port: 443,
        path: '/mtop/market/search/v2/doSearch',
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Length': Buffer.byteLength(postData)
            'Content-Type': 'application/json'
        }
    }
    let req = https.request(options, (res) => {
        res.on("data", chunk => {
            data += chunk
        })
        res.on("end", () => {
            console.log(data)
            cb(data)
        })
    })
    const postData = JSON.stringify([{},{"query":[{"queryName":"1","queryType":0,"rule":[]}],"sortBy":0,"pageIdx":0,"strategyInfo":null,"filter":null,"baseParam":{"imei":"","clientVersion":"","ypClient":2},"source":"searchPage","outerFilter":null,"requestId":"2089748416170245_1002","clientPageId":"48716586171220433","recentAddress":null,"requestExtraInfo":{"entryType":"ENTER_KEY","touchSortButton":false,"userNotAgreePrivacy":false,"os":"web","osVersion":"Android0","customosVersion":"unknown","appVersion":0,"phone":0,"appstore":"unknown","network":"unknown","frontVersion":"unknown"}}])
    req.write(postData)
    req.end()
}

server.listen(3000, () => {
    console.log("服务器启动成功")
})