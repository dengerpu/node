const express = require("express")
const app = express()

app.use(express.static("./public"))

// 模版引擎管理
app.set('views', './views')
app.set('view engine', 'ejs')

// 设置中间件，token过期体验
app.use((req, res, next)=> {
    // 排除login相关的路由和接口
    if(req.url.includes("login")) {
      next()
      return
    }
    // ?.相当于req.headers["authorization"] && req.headers["authorization"].split(" ")[1]
    const token = req.headers["authorization"]?.split(" ")[1]
    console.log("获取到的token", token)
    if(token) {
      const payload = JWT.verify(token)
      console.log("解析的token", payload)
      if(payload) {
        // 重新计算token过期时间
        const newToken = JWT.generate({
          _id: payload._id,
          username: payload.username
        }, "1d")
        res.header("Authorization",newToken)
        next()
      } else {
        res.status(401).send({
          ok: 3,
          msg: "登陆过期"
        })
      }
    } else {
      next()
    }
  })


app.listen(3000, () => {
    console.log("服务器启动成功")
})

// websocket
const WebSocket = require("ws")
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({port: 8080})
// 接收客户端的连接
wss.on('connection', function connection(ws){
    // 接受客户端发送的消息
    ws.on('message', function message(data) {
        console.log('received: %s', data)
        // 转发给其他人
        console.log(wss.clients) // 连接服务端的所有客户
        wss.clients.forEach(function each(client) {
            if(client !== ws && client.readyState == WebSocket.OPEN) {
                client.send(data, {binary: false})
            }
        })
    })
    ws.send('欢迎来到聊天室')
})
