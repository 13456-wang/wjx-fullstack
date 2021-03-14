const path = require('path');//路径
const fse = require('fs-extra');//fs扩展包
const { WriteStream } = require('fs');

//合并文件夹
//path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
const UPLOAD_DIR = path.resolve(__dirname , "." , "target");
//__dirname：    获得当前执行文件所在目录的完整目录名
// __filename：   获得当前执行文件的带有完整绝对路径的文件名
// process.cwd()：获得当前执行node命令时候的文件夹目录名 
// ./：           文件所在目录
console.log(UPLOAD_DIR)
const filename = 'wjx'
const filePath = path.resolve(UPLOAD_DIR,'..',`${filename}.jpg`)
console.log(filePath,'1')

const pipeStream = (path,WriteStream) =>{
    new Promise(resolve =>{
        const readStream = fse.createReadStream(path);
        readStream.on("end",()=>{
            // fse.unlinkSync(path)
            resolve();
        })
        readStream.pipe(WriteStream);
    })
}

const mergeFileChunk = async (filePath , filename , size) => {
    // console.log(filePath,filename,size);
    //大文件上传时 设计的后端思想 每个上传的文件 先以文件名为target目录名 把分文件 blob 放入这个目录
    //文件blob上传前要加上index
    //node 文件合并肯定是可以的 stream
    const chunkDir = path.resolve(UPLOAD_DIR,filename);
    console.log(chunkDir,'2')
    const chunkPaths = await fse.readdir(chunkDir);
    // console.log(chunkPaths,'3')
    chunkPaths.sort((a,b) =>a.split("-")[1]-b.split("-")[1]);
    //sort a-b升序排序 
    console.log(chunkPaths,'4')
    
    // Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个Promise实例， 那个输入的所有promise的resolve回调的结果是一个数组
    await Promise.all(
        chunkPaths.map((chunkPaths,index) =>
        pipeStream(
            path.resolve(chunkDir,chunkPaths),
            fse.createWriteStream(filePath,{
                start:index*size,
                end: (index+1)*size
            })
        )
        )
    )
    // console.log('文件合并成功')
    // fse.rmdirSync(chunkDir)
}
mergeFileChunk(filePath,filename,1024*1024);