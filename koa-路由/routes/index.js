const Router = require("koa-router")
const router = new Router()

const list = require("./list")
const user = require("./user")
const home = require("./home")

// 添加路由前缀
// router.prefix("/api")

router.use('/api/list', list.routes(), list.allowedMethods())
router.use('/api/user', user.routes(), user.allowedMethods())
router.use('/home', home.routes(), home.allowedMethods())
router.get('/login', async (ctx) => {
    console.log('访问login页面')
    await ctx.render('login')
})

// 路由重定向
//写法1 
router.redirect('/', '/home');
//写法2
// router.get("/",(ctx)=>{
//     ctx.redirect("/home")
// })



module.exports = router