const name = 'abc'
const sayName = () => {
    console.log(name)
}

// 接口暴露方法一：
modules.exports = {
    say : sayName
}
// 接口暴露方法一：
exports.say1 = sayName

// 这是错误的写法
// exports = {
//     abc: sayName
// }
