const Koa = require("Koa")
const router = require("./routes/index")
const path = require("path")
// 静态资源
const static = require("koa-static")

const app = new Koa()

// 静态资源管理
app.use(static(
    path.join(__dirname, "public")
))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("服务器启动成功")
})
