//数据范围 2(53) - 1
//bigint 数字后面带n
//高精度时间戳,MySQL id 
const theBiggestInt = 900071991n;
console.log(typeof theBiggestInt);
const alsoHuge =BigInt(9000713565454991n);
const b1 =BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(BigInt(Number.MAX_SAFE_INTEGER));
const maxPlusOne =b1 +1n;
console.log(maxPlusOne)