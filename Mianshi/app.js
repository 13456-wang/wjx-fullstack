const http=require('http')
// 可以吧这台机器的CPU都用起来？ 多进程？
module.exports = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end('Hello World')
}).listen(3000,()=>{
    console.log('监听3000端口')
})