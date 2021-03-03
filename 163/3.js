//引用类型
//基本类型 数据类型 引用数据类型
//存储的元素 值 地址(指针) 
//存储地点 栈 堆
// let a1 =1, b1=a1; b1=2;
// console.log(a1)

// const a =[]
// const b =a;
// b.push(1);
// console.log(a);
function test(person) {
    person.age = 26;
    person = {//person 被重置 不再是P1  引用类型 const person 常量 找地址的时候 不找了 重新分配一个地址
      name: 'yyy',
      age: 30
    }
    return person
  }
  
  const p1 = {
    name: 'yck',
    age: 25
  }
  const p2 = test(p1)
  console.log(p1) //age=26
  console.log(p2)//30 yyy