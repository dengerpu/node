const fs = require('fs')

const readStream = fs.createReadStream('./output.txt')
const writeStream = fs.createWriteStream('./input.txt')

readStream.pipe(writeStream)