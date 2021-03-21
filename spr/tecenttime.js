const EventEmitter = require('events').EventEmitter;//koa
// events 模块只提供了一个对象： events.EventEmitter。
//EventEmitter 的核心就是事件触发与事件监听器功能的封装
// extends EventEmitter 用户来访问的事件
// 网站就是一个订阅者发布者模式
class Tecenttime extends EventEmitter{
    constructor(){
        super();
        
    // emit按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false
        setInterval(()=>{
            this.emit('newlesson',{
                price: Math.random()*100
            }) //触发事件
        },2000)
    }
}
module.exports = new Tecenttime
//**exports **返回的是模块函数 exports的方法可以直接调用
// **module.exports **返回的是模块对象本身，返回的是一个类
//module.exports需要new对象之后才可以调用