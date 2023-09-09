const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update("hello world!")

console.log(hmac.digest('hex')) // 3840176c3d8923f59ac402b7550404b28ab11cb0ef1fa199130a5c37864b5497
