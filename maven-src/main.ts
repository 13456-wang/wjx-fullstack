//项目的启动 
import app from './app';//模块化的极致一个模块只做一件事 
//app 路由中间件上传文件 json化  将给App去做
//数据库连接
app.listen(1234,()=>{
    console.log('服务已启动')
})