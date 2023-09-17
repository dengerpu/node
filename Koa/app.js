const Koa = require("koa")

const app = new Koa()

app.use(ctx => {
    ctx.body = "koa"
})

app.listen(3000, ()=> {
    console.log("服务器启动成功")
})