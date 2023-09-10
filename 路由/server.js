const http = require('http')

const Routes = {}
function use(obj) {
    Object.assign(Routes, obj)
}

function start() {
    http.createServer((req, res) => {
        const urlObj = new URL(req.url, "http://localhost:3000")
        try {
            Routes[urlObj.pathname](req, res)
        } catch (error) {
            Routes['/404'](req, res)
        }
    }).listen(3000, () => {
        console.log("server start")
    })
}

exports.start = start
exports.use = use