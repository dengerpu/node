const Koa = require("Koa")
const router = require("./routes/index")
const path = require("path")
// 静态资源
const static = require("koa-static")
// post参数处理
const bodyParser = require("koa-bodyparser")
// 模版引擎
const views = require("koa-views")
// session
const session = require("koa-session-minimal")

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
// session管理
app.use(session({
    key: "SESSION_ID",
    cookie: {
        maxAge: 1000*60
    }
}))

app.use(async (ctx, next) => {
    console.log("访问的路径", ctx.url, "获取session", ctx.session.user)
    if(ctx.url.includes("login")) {
        await next()
        return 
    }
    if(ctx.session.user) {
        // 重新设置以下sesssion
        ctx.session.mydate = new Date()
        await next()
    } else {
        await ctx.redirect("/login")
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("服务器启动成功")
})
