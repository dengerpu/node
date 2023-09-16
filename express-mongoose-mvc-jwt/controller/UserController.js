const UserService = require("../service/UserService")
const JWT = require("../utils/JWT")

const UserController = {
    // 登陆
    login: (req, res) => {
      const {username, password} = req.body
      UserService.login(username, password).then(data => {
        console.log(data)
        if(data) {
          // 设置token
          const token = JWT.generate({
            _id:data._id,
            username:data.username
          },"1d")  
          // token返回在header
          res.header("Authorization",token)
          res.send({
            code: 1,
            msg: '登陆成功'
          })
        } else {
          res.send({
            code: 0,
            msg: '账号或者密码错误或账号不存在'
          })
        }

      }).catch(err => {
        console.log(err)
        res.send({
          code: 0,
          msg: '账号或者密码错误'
        })
      })
    },
    // 退出登陆 (token方式不需要退出接口)
    // logout: (req, res) => {
    //   req.session.destroy(()=>{
    //     res.send({
    //       code: 1,
    //       msg: "退出成功"
    //     })
    //   })
    // },
    // 添加用户
    addUser: (req, res) => {
        console.log(req.file)
        const avatar = req.file?`/uploads/${req.file.filename}`:`/images/default.png`
        const {username, password, age} = req.body
        UserService.addUser(username, password, age, avatar).then(data => {
          console.log(data)
          res.send({
            code: 1,
            msg: '添加成功'
          })
        }).catch(err => {
          console.log(err)
          res.send({
            code: 1,
            msg: '添加失败'
          })
        })
    },
    // 修改用户
    editUser: (req, res) => {
        const id = req.params.id
        const {username, age} = req.body
        UserService.editUser(id, username, age).then(data => {
          console.log(data)
          res.send({
            code: 1,
            msg: '修改成功'
          })
        }).catch(err => {
          console.log(err)
          res.send({
            code: 1,
            msg: '修改失败'
          })
        })
    },
    // 删除用户
    deleteUser: async (req, res) => {
        const data = await UserService.deleteUser(req.params.id)
        res.send({
            code: 1,
            msg: '删除成功'
        })
    },
    // 查找用户列表
    getUserList: (req, res) => {
        const {page, limit} = req.query
        UserService.getUserList(page, limit).then(data => {
            res.send({
                code: 1,
                data,
                msg: '获取成功'
            })
        }).catch(err => {
            console.log(err)
            res.send({
              code: 1,
              msg: '获取失败'
            })
        })
    }
}

module.exports = UserController