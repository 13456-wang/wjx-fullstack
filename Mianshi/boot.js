const cluster = require('cluster'); //多核 多进程

if(cluster.isMaster) {
    //该进程是主进程，则为 true
  // 不干活 
  // console.log(require('os').cpus().length);
  // 调度 
  for(let i = 0; i < require('os').cpus().length /2; i++) {
    createWorker(); // 
  }
  function createWorker() {
    var worker = cluster.fork(); // 子进程
    //衍生出一个新的工作进程
  }
} else {
  require('./app');
}