const express = require("express")
const JWT = require("../utils/JWT")

const route = express.Router()

route.post('/login', (req, res) => {
    const {username, password} = req.body
     // 设置token
     const token = JWT.generate({
        _id:data._id,
        username:data.username
      },"1d")  
      // token返回在header
      res.header("Authorization",token)
      res.send({
        ok: 1,
        msg: '登陆成功'
      })
})
