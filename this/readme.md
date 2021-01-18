1. 函数this 调用方式，作用域|上下文环境相关
    函数作用域scope 变量查找 从内部向外部查找
    内部查找-》外部 闭包(函数嵌套函数)
    //全局 
    (function(){
        //上
        return function(){
            //环境
            //上下文
            this 当前的运行环境
        }
    })()
2. 差异的本质来自于this的使用
    函数运行时所在的环境
    obj.foo对象方法
    foo函数 运行方式->>所在的环境(window|global|strict)

3.  函数的运行环境由什么决定？
    原子级别 原理
    - 闭包 声明在哪里？ 运行方式
    ```js
    function funcA(){
        let a=1;
        return function(){
            console.log(a)
        }
    }
    const fun =funcA();
    ```
    - 内存操作
    执行栈是内存的能力
    obj.foo（） obj.foo内存的指向的链条 this指向对象
    foo =obj.foo; value=>把地址交给了foo
    foo();普遍函数
    