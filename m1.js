const name = 'abc'
const sayName = () => {
    console.log(name)
}


// 接口暴露方法一：
module.exports = {
    say: sayName
}
// 接口暴露方法二：
// exports.say = sayName

// 这是错误的写法
// exports = {
//     abc: sayName
// }
