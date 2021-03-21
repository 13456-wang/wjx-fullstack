//剪刀石头步的游戏 Tecent
// 两个人玩
// 1. 用户输入node 输入
// 冯诺依曼原理 用户与程序玩这个游戏 rock scanf 
var playerAction = process.argv[2]
//process.argv属性是流程模块的内置应用程序编程接口，用于在命令行中运行时获取传递给node.js流程的参数
//此属性返回一个包含在命令行中运行时传递给该过程的参数的数组。第一个元素是流程执行路径，第二个元素是js文件的路径
console.log(process.argv)
// 2.对手 
if(['rock','paper' ,'scissor'].indexOf(playerAction) == -1){
    console.log('请输入正确的')
    return;
}else{
    var computerAction;
    var random = Math.random()*3
    if(random>1){
        computerAction="rock";
        console.log('电脑出了石头')
    }else if(random>2){
        computerAction = "scissor";
        console.log("电脑出了剪刀")
    }else {
        computerAction="paper",
        console.log('电脑出了布')
    }
    if(computerAction == playerAction){
        console.log('平局')
    }else if(
        (computerAction =="rock" && playerAction =="scissor")||
        (computerAction=="scissor" &&playerAction =="paper") ||
        (computerAction=="paper"&&playerAction=="rock")
    )
    {
        console.log('你输了')
    }else{
        console.log('你赢了')
    }
} 