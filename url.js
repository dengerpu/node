const url = require('url')

// parse
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const parsedStr = url.parse(urlString)
console.log(parsedStr)

// format
const urlObject = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=110',
    search: '?id=8&name=mouse',
    query: { id: '8', name: 'mouse' },
    pathname: '/ad/index.html',
    path: '/ad/index.html?id=8&name=mouse'
  }
  const parsedObj = url.format(urlObject)
  console.log(parsedObj) // https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110

// resolve
var a = url.resolve('/one/two/three', 'four')  // ( 注意最后加/ ，不加/的区别 )
var b = url.resolve('http://example.com/', '/one')
var c = url.resolve('http://example.com/one', '/two')
var d = url.resolve('http://example.com/one/', 'two')
console.log(a) // /one/two/four
console.log(b) // http://example.com/one
console.log(c) // http://example.com/two
console.log(d) // http://example.com/one/two