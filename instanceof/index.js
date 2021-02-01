function instance_of(L,R){
    var O = R.prototype;//构造函数原型对象
    console.log(O)
    // if(L.__proto__ == O){
    //     return true
    // }
    L=L.__proto__;
    while(true){
        if(L === null)return false;
        if(L === O){
            return true;
        }
        L=L.__proto__;
    }
}


//类和实例
function Animal(name){
    this.name = name;
}
//原型对象
Animal.prototype={
    canRun:function(){
        console.log('it can run')
    }
}
function Cat(){
    this.speak ='喵';
}
//将Animal的实例交给Cat 子类构造函数prototype属性作为原型对象
//prototype
Cat.prototype =new Animal('miao')
// 原型对象constructor属性  谁是原型对象的构造函数？
Cat.prototype.constructor = Cat;
//实例
var dog =new Animal("小黄")
// console.log(instance_of(dog,Animal));
// console.log(dog.__proto__);

// console.log(dog instanceof Animal);
console.log(Animal.prototype);
// console.log(dog.__proto__);
const a=new Cat('加菲猫')
//js对象会沿着原型链去查找
console.log(instance_of(a,Animal))
console.log(a.__proto__ ,"----------a.__proto__")
console.log(a.__proto__.__proto__,"----------a.__proto__.__proto__")
