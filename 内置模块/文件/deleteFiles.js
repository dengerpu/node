const fs = require("fs").promises
const path = require('path')

// 删除文件
function deleteFile(filename) {
    const fileDirs = fs.readdir(filename).then(data => {
        data.forEach(item => {
            fs.stat(path.join(filename, item)).then(stats => {
                if(stats.isDirectory()) {
                    deleteFile(path.join(filename, item))
                } else {
                    fs.unlink(path.join(filename, item))
                }
            })
        })
    }).catch(err => {
        console.log(err)
    })
}

deleteFile('./avator')

