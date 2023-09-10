const server = require('./server')
const routes = require('./route')
const api  = require('./api')

// 注册路由
server.use(routes)
server.use(api)

server.start()