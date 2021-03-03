// let a =[1,2,3];
// &&与
// a.join = a.shift;
//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值

// console.log(a.shift,a.join,a)
// console.log(a==1&&a==2 &&a==3) //true
const a={
    value:[3,2,1],
    valueOf:function(){
        return this.value.pop()
        // pop() 方法用于删除并返回数组的最后一个元素。
    }
    
}
console.log(a==1 && a==2 && a==3)