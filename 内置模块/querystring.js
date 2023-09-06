 const querystring = require('querystring')

 // parse
 var qs = 'x=3&y=4'
 var parsed = querystring.parse(qs)
 console.log(parsed) // { x: '3', y: '4' }

 // stringify
var qo = {
    x: 3,
    y: 4
}
var parsed2 = querystring.stringify(qo)
console.log(parsed2) // x=3&y=4

// escape转义
var str = 'id=3&city=北京&url=https://www.baidu.com'
var escaped = querystring.escape(str)
console.log(escaped) // id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com
var str2 = "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com"
console.log(querystring.unescape(str2)) // id=3&city=北京&url=https://www.baidu.com