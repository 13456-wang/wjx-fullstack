//es6 提供class关键字
// 语法糖 其实他还是原型式继承，
//像大型语言 传统面向对象的写法
class Person{
    //新写法
    count = 0;
    constructor (name) {
        this.name=name;
        
    }
    sayHello(){
        return 'hello, I am '+this.name
    }
}
const kevin =new Person('Kevin');
//可访问 不可枚举 es6属性和方法 更细节的功能
console.log(kevin.__proto__,Person.prototype);
console.log(kevin.sayHello());
console.log(Person.prototype)
//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
//es6里可枚举怎么实现？
console.log(Object.keys(Person.prototype))
//Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
console.log(Object.getOwnPropertyNames(Person.prototype))
