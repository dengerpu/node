const Koa = require("Koa")
const router = require("./routes/index")
const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("服务器启动成功")
})
