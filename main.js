// requier 关键字，引入库
// const fs =  require('fs');//文件系统，内置模块
const nodemailer = require('nodemailer'); //第三方库 npm下载模块后,在项目中引入就可以使用
const {default:Axios} = require('axios');//axios 是用在浏览器和 node.js,简单的讲就是可以发送get、post请求。说到get、post
const schedule = require('node-schedule');//node-schedule来完成定时任务
// 模块语法 module
// const modA = require('./a.js') //相对地址
// console.log(modA.add(1,2));
// fs.re
// async(异步函数) + await
// 获取情话
function getWords(){
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url);

}
// 发邮件
async function sendMail(words){ //异步（Asynchronous, async）是与同步（Synchronous, sync）
    let user = "2361370630@qq.com";
    let pass = "lhpzzcqoybcjeajb"; //授权码
    let to = "1469040287@qq.com"
    let transporter = nodemailer.createTransport({
        host:"smtp.qq.com",port:587,secure:false,
        //true只能在HTTPS连接中传输，HTTP连接不会传输，false HTTP、HTTPS连接都可以传输
        auth:{
            user:user,
            pass:pass
        }
    })
    let info = await transporter.sendMail({
        from: `王嘉新<${user}>`, // sender address
        to: `李汗<${to}>`,
        subject: "写给垃圾的一封信",
        text: words
      })
      console.log("发送成功");
}

// getWords()
//     .then(res =>{
//         // console.log(res.data)
//         sendMail(res.data)
 //   })
 schedule.scheduleJob({hour:1,minute:23},function(){
    console.log("启动任务"+new Date());
    getWords().then(res =>{ //就是当.then()前的方法执行完后再执行then()内部的程序 异步执行
        // console.log(res.data)
        sendMail(res.data);
    })

})