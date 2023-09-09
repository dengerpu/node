const crypto = require("crypto")

function encrypt(key, iv, data) {
    let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    return decipher.update(data, 'binary', 'hex') + decipher.final('hex');
}

function decrypt (key, iv, crypted) {
    crypted = Buffer.from(crypted, 'hex').toString('binary');
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    return decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
}
// key, iv必须是16字节
// 16*8 = 128
let key="abcdef1234567890"
let iv="tbcdey1234567890"
let data = "dep"

let cryted = encrypt(key,iv,data)
console.log("加密结果-",cryted) // 加密结果- 7707ec8adfd4c15fddc8d25e7e8b7006

let decrypted = decrypt(key,iv,cryted)
console.log("解密结果-",decrypted) // 解密结果- dep
