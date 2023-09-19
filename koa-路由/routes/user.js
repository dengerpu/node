const Router = require("koa-router")
const router = new Router()

router.get("/", (ctx) => {
    ctx.body = ["111","222","333"]
}).put("/:id", (ctx) => {
    ctx.body = {
        ok: 1,
        id: ctx.params.id,
        msg: "更新成功"
    }
}).post("/add", (ctx) => {
    ctx.body = {
        ok: 1,
        msg: "添加成功"
    }
}).del("/:id", (ctx) => {
    ctx.body = {
        ok: 1,
        id: ctx.params.id,
        msg: "删除成功"
    }
}).get("/login", (ctx) => {
    console.log("get请求参数", ctx.query, ctx.querystring)
    ctx.body = ctx.query
}).post("/login", (ctx) => {
    console.log("post请求参数", ctx.request.body)
    const {username, password} = ctx.request.body
    if(username == 'admin' && password == '123456') {
        //设置sessionId
        ctx.session.user = {
            username:"admin"
        }
        ctx.body = {
            code: 1,
            msg: "登陆成功"
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "账号或密码有误"
        }
    }
})


module.exports = router