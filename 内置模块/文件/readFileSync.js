const fs = require('fs')
// 同步读取文件
try {
    const content = fs.readFileSync('./avator/test.txt', 'utf-8')
    console.log(content)
} catch (e) {
    console.log(e.message)
}