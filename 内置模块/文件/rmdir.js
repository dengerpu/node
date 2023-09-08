const fs = require('fs')

fs.rmdir('./avator', (err) => {
    if(err && err.code == 'ENOENT') {
        console.log("文件不存在")
    }
    if(err && err.code == 'ENOTEMPTY') {
        console.log('文件夹不为空')
    }
})