const Router = require("koa-router")
const router = new Router()

router.get("/", async (ctx) => {
   let username = "张三"
   console.log("访问了/home")
   await ctx.render("home", {username})
})

module.exports = router