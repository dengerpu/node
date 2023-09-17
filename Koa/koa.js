const Koa = require("Koa")

const app = new Koa()

// // 同步： 输出结果  1 2 3
// app.use((ctx, next) => {
//     if(ctx.url == '/favicon.ico') return 
//     console.log(1)
//     next()
//     console.log(3)
//     ctx.body = {
//         ok: 1
//     }
// })
// app.use((ctx) => {
//     console.log(2)
// })

// 异步 输出 1 2 3 4 (并且返回的内容是停5秒才会渲染)
app.use(async (ctx, next) => {
    if(ctx.url == '/favicon.ico') return 
    console.log(1)
    const mytoken = await next() // 4 asdsfsdgfsdgsfdgdfgdfg
    console.log(4, mytoken)
    ctx.body = {
        ok: 1
    }
})
app.use(async (ctx) => {
    console.log(2)
    await delay(5)
    console.log(3)
    return 'asdsfsdgfsdgsfdgdfgdfg'
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time * 1000)
    })
}


app.listen(3000, (req, res) => {
    console.log("服务器启动成功")
})