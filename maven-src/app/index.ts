// app创建以及基本配置 中间件
// es6 module typescript=> => js  
import express from 'express';
import postRouter from '../post/post.router'

const app = express();
const bodyParser = require('body-parser')
//body 加中间件 bodyParser 
app.use(bodyParser.urlencoded());
// 用户表单输入

//app处于伺服状态 eventEmmitter
//中间件来打理 函数
//所有路由都在这里汇总
app.use( //函数
    postRouter,
    //文章模块的路由存，删，改，查

    //用户相关的路由
)
export default app;
