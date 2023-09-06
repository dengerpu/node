const { URL } = require('url');

const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const myURL = new URL(urlString, "https://www.baidu.com")
console.log(myURL)