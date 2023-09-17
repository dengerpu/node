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
})


module.exports = router