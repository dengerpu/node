const Koa = require("Koa")
const router = require("./routes/index")
const path = require("path")
// 静态资源
const static = require("koa-static")
// post参数处理
const bodyParser = require("koa-bodyparser")
// 模版引擎
const views = require("koa-views")

const app = new Koa()

// 静态资源管理
app.use(static(
    path.join(__dirname, "public")
))
// post参数管理
app.use(bodyParser())
// 模版引擎管理
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("服务器启动成功")
})
