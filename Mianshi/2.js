//不要追求完美 
//写好类似LeetCode 函数 测试用例 期待答案
//提供36位的表达式 0-9 a-z
function getNum36(){
    var num36 =[];
    for(var i=0;i<36;i++){
        if(i>=0 && i<=9){
            num36.push(i)
        }else{
            num36.push(String.fromCharCode(i+87));
            // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
            //
        }
    }
    // console.log(num36,'------')
    return num36
}
function scale36(n){
    //单独的功能函数 
    //36进制数 0-9 a-f-z gi 36进制数
    const arr=[]
    var nums36 = getNum36();
    while(n){
        var res = n%36
        console.log(res,'++++++++')
        arr.unshift(nums36[res])
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        n = parseInt(n/36)
        //parseInt() 函数可解析一个字符串，并返回一个整数。
        console.log(n,arr)
    }
}
console.log(scale36(36),'22222');//10
console.log(scale36(86));//11
