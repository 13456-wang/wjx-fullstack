var obj = {};//空对象
//defineProperties方法 如名 es6定义对象新的API
//vue的老版本需要他
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
console.log(obj.property1,obj.property2);
obj.property2="王嘉新"
console.log(obj.property2);
console.log(Object.keys(obj));