// import es6 模块化方案
//游戏规则与设备分离 游戏要在小程序上完 
//复用 
const game = require('./game.js') //commonJS 
//JS操作系统 事件机制
//一直玩 process.argv[2] 持续不断的去命令行
var winCount = 0;
process.stdin.on('data',(buffer)=>{
    //一个指向 标准输入流(stdin) 的可读流(Readable Stream)。
    //标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收
    const action = buffer.toString().trim();//二进制变string
    // trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
    // trim() 方法不会改变原始字符串。
    const result = game (action);
    if(result ==1){
        winCount++
        if(winCount==3){
            console.log('我不玩了')
            process.exit()
        }
    }
})