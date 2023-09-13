// 数据库
const mongoose = require('mongoose')


// 设置 MongoDB 连接字符串
const connectionString = 'mongodb://admin:123456@localhost:27017/express-mongo';

// 使用 Mongoose 连接到 MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('成功连接到 express-mongo 数据库！');
    })
    .catch(err => {
        console.error('无法连接到 MongoDB:', err);
    });

