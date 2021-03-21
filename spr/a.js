const tecenttime = require('./tecenttime.js')
//require：运行时加载 require：模块就是对象，输入时必须查找对象属性
// import：编译时加载（效率更高）
// import：ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入

//事件是如何实现的? 订阅 发布者模式
tecenttime.on('newlesson',({price})=>{
    //为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    if(price<80){
        console.log('ok ,buy it')
    }
})