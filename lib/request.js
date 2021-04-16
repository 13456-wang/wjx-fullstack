let url = require('url')

let request = {
    //ctx.url == ctx.request.url
    get url(){
        //url就能取到值
        console.log(this)
        return this.req.url

    },
    get path (){
        return url.parse(this.req.url).pathname
        //将数据转换为 JavaScript 对象。path只会路劲名称 不会取到
    },
}

module.exports =request