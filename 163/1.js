//symbol 
// var syml =Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3);
// console.log(typeof syml);//symbol
// new Symbol() //Symbol is not a constructor
// 1. 函数来创建，原始数据类型 冲突的地方？
//数据类型变量 要分配内存空间， 原始数据类型 栈分配 引用类型 堆
//symbol (字符串)?有何用 ？做一个标识 
// console.log(sym3.toString());
// 2.symbol有什么用
//
// var mySymbol  =Symbol() //初始化
// var shapeType ={
//     //形状的类型
//     triangle:'triangle',//三角形
//     square:'square'//正方形

// }
// //精神大条一些，
// var shapeType ={
//     //形状的类型
//     triangle:Symbol(),//三角形
//     square:Symbol()//正方形

// }
// function getArea(shape,options){
//     var area =0;
//     switch(shape){
//         case shapeType.triangle: area =0.5*options.width *options.height;
//         break;
//         case shapeType.square: area = options.width *options.height;
//         break;
//     }
//     return area;
// }
// console.log(getArea(shapeType.triangle,{
//     width:100,
//     height:100,

// }))
// var s1 =Symbol('foo');
// console.log(s1 instanceof Symbol);//原始数据类型
// const obj={
//     toString(){ //覆盖Object.prototype.toString()
//         return 'abc'
//     }
// }
// const sym =Symbol(obj);
// console.log(obj.toString());
// var sym =Symbol("My symbol");
// console.log("your symbol is" +sym);//cannot convert a Symbol value to a string
// symbol作为json key 第二种引用场景
var obj ={};
var a =Symbol();
var b=Symbol();
obj[a]='hello ';
obj[b]='world';
obj.cc='ccc';
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
console.log(obj[a])
for (let key in obj){
    console.log(obj[key],'--')
}
Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log(obj[item])
})