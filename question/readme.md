# js有没有可能

    7种简单Symbol BigInt
    null是对象吗？ typeof null //object
    JS存在的一个bug 最初版本中使用的是32位系统
    二进制 前3位是用来标明它是什么类型
    undefined null 00
    {} 3位 000  Object
    typeof 3位
    为了性能考虑存变量的类型信息 000 Object
    Object.prototype.toString //类型转换

# '1'.toString()
    String -> Object 上的
    Object 是所有对象的原型对象 
    简单数据类型 不会有方法
    1. 创建包装类实例 newString("1")
    2. 调用该实例的方法 '1'.toString()  s.toString() 给回去
    3. 使命已完成 s =null 执行完方法后 立即销毁这个实例
    typeof("1") string
    spilt("a",1) //类型 php
    var 
