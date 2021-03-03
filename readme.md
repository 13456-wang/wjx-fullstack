nginx 静态网页 http服务 html
动态 node
1. centos node
    - nginx wegt taobao mirrors  .tar.bz
    解压tar -xvf  
    /usr/local/bin/node/bin   node npm npx
    - 全局命令 linux 配置软连接 
        ln -s /usr/local/bin/node/bin/node /usr/bin/node
        使其在usr/bin下
        rm -rf
        npm init -y
        npm i koa --save
2. Koa code
    ```
    const express =require('express');
    const Koa = require('koa');//引入最好的node开发框架
    const app =new express();
    const app = new Koa();
    //中间件 middlewares 每个中间件都是一个函数
    app.get('/',(req,res) =>{
        res.send('hello world');
    })
    //这一次http服务流程 请求和响应的过程 
    //app.use 启用一个中间件
    app.use(async ctx => { //ctx express ctx =req+res
            ctx.body = 'Hello World';//res body 响应体
    })
    app.listen(3000);
    ```
    3000端口 
    node app.js 命令行一直霸占在那
    3000 任何人发出请求 ctx伺服
    后台运行
    npm i -g pm2
    pm2 start app.js

    linux中
    运行./node_modules/.bin/pm2 start app.js