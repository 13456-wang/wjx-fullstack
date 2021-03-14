const http = require('http')
const path = require('path')
const multiparty = require('multiparty')
const UPLOAD_DIR = path.resolve(__dirname , "." , "target")
const fse = require('fs-extra')
const server = http.createServer();

server.on('request',async(req,res) =>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    res.end("hello")

    if(req.url == '/'){
        const multipart = new multiparty.Form()
        // console.log(multipart)
        multipart.parse(req,async(err , fields, files)=>{
            if(err){
                return;
            }
            const [chunk] = files.chunk
            const [filename] = fields.filename
            console.log(filename,'----')
            const dir_name = filename.split('-')[0]
            const chunkDir = path.resolve(UPLOAD_DIR,dir_name)
            console.log(chunkDir,filename)
            if(!fse.existsSync(chunkDir)){
                await fse.mkdir(chunkDir);
            }
            await fse.move(chunk.path, `${chunkDir}/${filename}`)
        })
    }else if(req.url == '/merge'){
        res.end('ok');
    }
})
server.listen(3000,() =>console.log("hello"))