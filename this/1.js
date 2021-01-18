// 'use strict';//启用严格模式
var obj={ //json object
    bar:1,
    foo:function(){
        console.log(this.bar)
    }

}
var foo = obj.foo;
var bar=2;
obj.foo();//this会指向obj本身，函数调用方式,作用域||运行环境 对象上的方法
foo();//this? 普通函数

