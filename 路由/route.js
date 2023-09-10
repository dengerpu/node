const fs = require('fs')
const path = require('path')
const mime = require('mime')



function render(res, path, type='') {
    res.writeHead(200, {
        'Content-Type': `${type?type:'text/html'};charset=utf-8;`
    })
    res.write(fs.readFileSync(path), 'utf-8')
    res.end()
}
const routes = {
    '/': (req, res) => {
        render(res, './static/index.html')
    },
    '/login': (req,res) => {
        render(res, './static/login.html')
    },
    '/home': (req,res) => {
        render(res, './static/home.html')
    },
    '/404': (req,res) => {
        // 先判断是不是静态资源
        if(readStaticFile(req, res)) {
            return
        }
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=utf-8;'
        })
        res.write(fs.readFileSync('./static/404.html'), 'utf-8')
        res.end()
    }
}

// 静态资源管理
function readStaticFile(req, res) {
    // 获取路径
    const urlObj = new URL(req.url, "http://localhost:3000")
    const pathname = path.join(__dirname, '/static', urlObj.pathname)
    if(urlObj.pathname === '/') return false
    if(fs.existsSync(pathname)) {
        // 处理静态资源
        // mime.get(文件后缀名)， 获取文件对应的Content-Type值
        render(res, pathname, mime.getType(urlObj.pathname.split('.')[1]))
        return true
    } else {
        return false
    }
}


module.exports = routes