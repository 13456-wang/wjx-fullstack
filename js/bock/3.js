class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
Object.assign(Point.prototype,{toString(){},toValue(){}})
//Object.assign(目标，源对象) 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象
const o=new Point(1,2);
console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.keys(Point.prototype));
console.log([...Object.getOwnPropertyNames(o),...Object.keys(o.__proto__),...Object.keys(o.__proto__.__proto__)]);
const getAllProperties = (o) =>{
    let arr = Object.getOwnPropertyNames(o);
    let p= o.__proto__;
    let res=[...arr];
    while(p){
        const keys = (Object.keys(p));//keys会返回一个由一个给定对象的自身可枚举属性组成的数组
        for(let key of keys){
            res.push(key);
        }
        console.log(p);
        p=p.__proto__;
        console.log(p);
    }   
    console.log(res);
    return res;
}
 console.log(getAllProperties(o));

