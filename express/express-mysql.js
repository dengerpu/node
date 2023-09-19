const express = require('express')
const mysql2 = require("mysql2")
const app = express()

app.use('/', async (req, res) => {
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise();
    // 增删改查语句都放这个query里面
    // 查询
    // let user =  await promisePool.query("select user_id,username,nick_name from sys_user");
    let user =  await promisePool.query("insert into sys_user ( dept_id, username, nick_name) values(?,?,?)", [2, "test", "测试"]);
    console.log(user)
    if(user[0].length) {
        res.send(user[0])
    } else {
        res.send("查询失败")
    }
})

app.listen(3000, () => {
    console.log("服务器启动成功")
})


function getDBConfig() {
    return {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: 'root',
        database: 'vue-admin',
        connectionLimit: 1 //创建一个连接池
    }
}

