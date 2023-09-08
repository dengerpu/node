const fs = require('fs')

// 读取文件的内容
fs.readFile("./avator/test.txt",  'utf-8', (err, data) => {
    console.log(data)
})