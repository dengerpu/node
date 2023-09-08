const fs = require('fs')

// 删除文件
fs.unlink('./avator/test.txt', (err) => {
    console.log(err)
})