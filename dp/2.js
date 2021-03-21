// 递归需要优化 尾递归
// 重复计算 大量的
// 算过的记忆下来
// k:result
//用空间换时间
const f =[];
const climbStairs = function(n){
    if(n==1){
        //退出条件
        return 1
    }
    if(n==2){
        return 2
    }
    if(f[n]===undefined) 
    console.log(f[n])
    f[n]=climbStairs(n-1)+climbStairs(n-2)
        return f[n]
    
}
console.log(climbStairs(9))