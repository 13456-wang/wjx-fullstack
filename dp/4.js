// Math.min(f(n-5),f(n-2),f(n-c1))
const coinChange = function(coins,amount){
    const f =[];
    f[0] = 0
    for(let i = 1; i<=amount;i++){
        f[i] = Infinity;
        // Infinity 属性用于存放表示正无穷大的数值。
        //上一次金额+1 比较 
        for(let j=0;j<coins.length;j++){
            if(i - coins[j] >= 0){
                console.log(i,f[i],f[i-coins[j]]+1,f)
                f[i] = Math.min(f[i],f[i-coins[j]]+1)
                
            }
        }
            console.log('---------')

    }
    if(f[amount] === Infinity){
        return -1
    }
    return f[amount]
}
console.log(coinChange([1,2,5],11))





// const conss = [1,2,5]
// const amount = 11
// const a = function(n){
//     // 6 9 10 
//     let b = parseInt(n/5)
//     let c = parseInt((n-b*5)/2)
//     console.log(c,b,n)
//     let d = (n-b*5-2*c)
//     return d
// }   

// console.log(a(11))