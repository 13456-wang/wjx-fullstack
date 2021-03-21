const climbStairs = function(n){
    // console.log('----')
    const f =[];
    f[1] = 1;
    f[2] = 2;
    for(let i = 3;i<=n;i++){
        f[i]=f[i-2] +f[i-1]
        // console.log(f[i])
    }
    return f[n]
}
console.log(climbStairs(5))