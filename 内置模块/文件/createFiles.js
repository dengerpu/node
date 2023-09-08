const fs = require('fs')

// 批量创建文件
for(let i = 0; i < 10; i++) {
    fs.mkdirSync(`./avator/logs${i}`, err => {
        console.log(err)
    })
    fs.writeFileSync(`./avator/logs${i}/log${i}.txt`, `log${i}`, err => {
        console.log(err)
    })
}