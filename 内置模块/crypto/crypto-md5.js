const crypto = require('crypto')

const hash = crypto.createHash('md5')

hash.update('123456')
hash.update('1') // 会叠加，就相当于1234561加密后的结果

console.log(hash.digest('hex'))