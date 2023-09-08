const fs = require('fs')

// 打开一个流
const fileStream = fs.createReadStream('./test.txt', 'utf-8')

let data = ""
fileStream.on("data", (chunk) => {
    data += chunk
    console.log(chunk)
})

fileStream.on("end", () => {
    console.log("end")
    console.log(data)
})

fileStream.on("error", (err) => {
    console.log('ERROR: ' + err)
})