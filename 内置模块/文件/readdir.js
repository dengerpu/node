const fs = require('fs')

// 读取文件/目录信息
fs.readdir("./avator", (err, data) => {
    data.forEach((value, index) => {
        fs.stat(`./avator/${value}`, (err, stats) => {
            // console.log(value + ':' + stats.size)
            console.log(value + ' is ' + (stats.isDirectory() ? 'directory' : 'file'))
        })
    })
})