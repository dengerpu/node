const UserService = require("../services/UserService")

const UserController = {
    // 添加用户
    addUser: (req, res) => {
        const {username, password, age} = req.body
        UserService.addUser(username, password, age).then(data => {
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