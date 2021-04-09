getJson =() =>{ //异步
    return "JSON"
}

//函数前面加async 只是声明这个函数内部存在异步

async function testAsync(){
    try{
        await getJson()
    }catch(error){
        console.log(error)
    }
    //返回一个Promise
    //函数前面加await 那么逻辑就会等到这个异步函数执行完毕后 在执行
}