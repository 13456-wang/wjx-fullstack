文件上传是开发中的难点 大文件上传及断点断续 
面试官在考察es6文件对象ajax上传 async await promise 后台文件存储
流操作 等全面的全栈技能 提升难度到大文件和断点续传   

文件上传 8M size 1M 8份
切片 
1. 是js 在es6 文件对象file node file stream 有所增强
    任何文件都是二进制,分割blob类型
    start ,size , offset 
    http 请求 n个切片并发上传 速度更快 改善了体验
    - 前端切片让http并发带来上传大文件的快乐
    1. file.slice完成切片,blob类型文件切片，js二进制文件类型 
        blob协议在上传文件到服务器之前就可以提前预览

- 服务器端
    如何将这些切片合并成一个 显示原来图片
    stream 流
    可读流 可写流 
    chunk 二进制文件
    promise.all来包装每个chunk文件
    start end fse.createWriteStream
    每个文件chunk 写入时 先创建可读流 在pipe给可写流