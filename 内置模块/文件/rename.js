const fs = require('fs')

// 文件夹改名
fs.rename('./avator2', 'avator', (err) => {
    if(err && err.code == 'ENOENT') {
        console.log("文件不存在")
    }
})