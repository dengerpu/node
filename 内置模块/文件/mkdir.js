const fs = require('fs')

// 创建文件夹
// 路径可以写相对路径，也可以写绝对路径
fs.mkdir("./avator", (err) => {
    // console.log(err)
    if(err && err.code == 'EEXIST') {
        console.log("目录已存在")
    }
})