const koa = require('koa')
const mount = require('koa-mount')
const serve=require('koa-static')
//静态文件static ->cdn 静态服务器 
const fs =require('fs')
const app = new koa();


app.use(serve(__dirname+'/static/'))
console.log(__dirname+'/static/')
app.use(
    mount('/',ctx =>{
        ctx.body = fs.readFileSync(__dirname+'/max_count.html','utf-8');
        
    })
)
app.listen(1234)