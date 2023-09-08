const fs = require('fs')

// 往文件里面写入内容, 文件不存在会自动创建文件
fs.writeFile('./avator/test.txt', 'hello, word\n 我是abc', (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('文件创建成功')
    }
})