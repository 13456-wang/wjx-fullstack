var a=0xa;//这是什么? //进制 8 16 0x开头 16进制
console.log(typeof a);
var b=010 //8进制
var c=0b01;//2进制
console.log(c+3)//运算时会转换成十进制数
console.log(b+19)
// JS浮点数不精确 0.3
//JS没有浮点数 所有js为number 不适合高精度计算
//JS转成二进制会无线循环 32位 舍弃一些位 
//二进制位相加 不准确 
console.log(0.1+0.2)
console.log((8).toString(8));
console.log((0.1).toString(2));//toString 传进制数 浮点数相加不准确
console.log(Number.parseInt('010',8))
console.log(Number.parseInt('20',2))//结果是NaN
console.log(9999999999999999);
// JS Number 类型只能安全表达 -9007199254740991(-2(^53-1))
console.log(999999999999999999n)
console.log(900719992579458329n ===900719992579458328n);
console.log(10n+10n);