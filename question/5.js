//[]Object Array[] ![]
//直观上它是矛盾的
// 类型转换 隐式 只有三种 数值 布尔 字符串
//[]转换 Boolean
//什么东西触发类型转换
//[] =>false Boolean
console.log([] == true)//false
//！可将变量转换成boolean类型，null、undefined、NaN以及空字符串('')取反都为true，其余都为false。
console.log([] ==![]);//true ![]优先  ！转换成boolean值false 一个空的数组转换成number为0 false
console.log({}=={});//false
console.log(Number([]));//显示类型转换 数字 0
console.log(Boolean([]) == Boolean(![]));