const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
// 内容写在db.json文件
const adapter = new FileSync('db.json')
const db = low(adapter)

// 设置默认
db.defaults({ posts: [], user: {} })
  .write()

// 添加一条数据
db.get('posts')
.push({ id: 1, title: '1111'})
.write()
// 从头部添加
db.get('posts')
.unshift({ id: 2, title: '222'})
.write()
db.get('posts')
.unshift({ id: 3, title: '333'})
.write()

// 查找
let res = db.get('posts')
  .find({ id: 2 })
  .value()
console.log(res)

// 删除一条
let res1 = db.remove('posts')
  .find({ id: 2 })
  .value()
console.log(res1)
// 删除满足条件的
let res2 = db.get('posts')
  .remove(item => item.id == 2)
  .value()
console.log(res2)

// 更新数据
db.get('posts').find({ id: 3 }).assign({title: "修改的内容"})

// Set a user using Lodash shorthand syntax
db.set('user.name', 'abc')
.write()