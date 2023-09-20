const express = require("express")
const app = express()

app.use(express.static("./public"))

// http响应
app.get("/", (req, res) => {
    res.send({
        ok: 1
    })
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
