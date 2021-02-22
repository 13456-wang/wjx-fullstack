//babel 也是可以写的
// 1. Person class -> function new 普通调用报错
function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function')
    }
}
var Person =function Person(name){ //es5
    //函数的运行方式，不是new的方式
    //this不一样
    _classCallCheck(this,Person);//封装 babel webpack工作流套件 把一些任务封装了 
    // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    // if(this instanceof Person ){
    //     throw new TypeError('Cannot call a class as a function')
    // }
    this.name=name
}
new Person();
Person();
