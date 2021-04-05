//executor 执行器的实现
//状态转移
//thenable 
//如何让执行器决定状态转移的执行
class Promise{
    constructor(executor){
        this.state = 'pending' //初始化未完成状态
        //成功的值
        this.value = undefined;
        //失败的原因
        this.reason = undefined;
        //异步任务会把结果交给resolve
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = []

        let resolve = (value) =>{
            // console.log("fullfilled状态被执行")
            if(this.state == "pending"){
                this.value = value
                this.state = "fulfilled"
                this.onResolvedCallbacks.forEach(fn =>fn())
            }   
            console.log("fulfilled状态被执行",this.value,this.state)
            //onFulfilled执行一下 记忆功能
     
        }

        let reject = (reason) =>{
            // console.log("reject状态被执行")
            if(this.state =="pending"){
                this.reason = reason
                this.state = "rejected"
                this.onRejectedCallbacks.forEach(fn =>fn())
            }
            console.log("reject状态被执行",this.reason,this.state)
        }
        // executor(resolve,reject)
        try{
            executor(resolve,reject)
        }catch(e){
            reject(err)
        }
        
    }
    //当前promise 解决了 完成了状态转移 把控制权交出来

    then(onFulfilled,onRejected){
        console.log('then ........')
        //如果状态为fulfilled 时 ， 传入成功后的回调 将执行权转移
        if(this.state == 'fulfilled'){
            console.log('onFulfilled,----')
            onFulfilled(this.value);
        }
        //状态为rejected 传入为失败后的回调
        if(this.state == 'rejected'){
            onRejected(this.reason)

        }

        if(this.state == 'pending'){
            this.onResolvedCallbacks.push(()=>{
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason)
            })
        }
    }
    // then(){

    // }
}
new Promise((resolve, reject) => {
    // 将花时间比较多的任务封装起来， 以实现异步变同步 
    setTimeout(() => {
      console.log(0)
      resolve(10);
    // reject('脑子what了')
    // throw new Error('出错了')
    }, 1000)
  }).then((data)=>{
    console.log(data,"++++++");
  })