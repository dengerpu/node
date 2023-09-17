const Router = require("koa-router")
const router = new Router()

router.get("/", (ctx) => {
    ctx.body = `
        <html>
            <h1>主页</h1>
        </html>
    `
})

module.exports = router