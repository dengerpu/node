
function render(res,data,type=""){
    res.writeHead(200, { "Content-Type": `${type?type:"application/json"};charset=utf-8;` })
    res.write(data)
    res.end()
}

const api = {
    '/api/getlogin': (req, res) => {
        const urlObj = new URL(req.url, "http://localhost:3000")
        if(urlObj.searchParams.get('username') == 'dep' && urlObj.searchParams.get('password') == '123456') {
            render(res, JSON.stringify({
                code: 1,
                success: true
            }))
        } else {
            render(res, JSON.stringify({
                code: 0,
                success: false
            }))
        }
    },
    '/api/postlogin': (req, res) => {
        let post = ""
        req.on("data", chunk => {
            post += chunk
        })
        req.on("end", () => {
            post = JSON.parse(post)
            if(post.username == "dep" && post.password == '123456') {
                render(res,JSON.stringify({
                    code: 1,
                    success: true
                }))
            } else {
                render(res,JSON.stringify({
                    code: 0,
                    success: false
                }))
            }
        })
    }
}

module.exports = api