const fs = require('fs')

const readStream = fs.createWriteStream('./output.txt', 'utf-8')

readStream.write("使用stream写入文本\n")
readStream.write("结束")

readStream.end()