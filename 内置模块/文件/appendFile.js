const fs = require('fs')

// 往文件里面追加内容
fs.appendFile('./avator/test.txt', "我是追加的内容", err => {
    if (err) {
        console.log(err)
    }
})