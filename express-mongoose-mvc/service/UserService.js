const UserModel = require('../model/UserModel')

const UserService = {
    // 添加用户
    addUser: (username, password, age) => {
        return UserModel.create({
            // username: username, password: password, age: age
            username, password, age
        })
    },
    // 修改用户
    editUser: (id, username, age) => {
        return UserModel.updateOne({_id: id}, {
            username, age
        })
    },
    // 获取用户列表
    getUserList: (page, limit) => {
        return UserModel.find({}, ["username", "age"])
        .sort({age: -1})
        .skip((page - 1) * limit)
        .limit(limit)
    },
    // 删除用户
    deleteUser: (id) => {
        return UserModel.deleteOne({
            _id: id
        })
    }
}

module.exports = UserService