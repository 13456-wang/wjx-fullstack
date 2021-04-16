let EventEmitter = require('events')
let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter{
    constructor(){
        super()
        this.fn
        this.context = context
        this.request = request
        this.response = response
    }
    use(fn){
        this.fn = fn
    }
    createContext(req,res){//创建ctx
        const ctx =Object.create(this.context)//ctx.url ctx.request.url
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res
        request.ctx = response.ctx = ctx
        request.response =response
        response.request = request
        console.log(ctx.url)
        console.log(ctx.path)
    }

    handleRequest(req,res){
        let ctx = this.createContext(req,res)
        this.fn(ctx)
        res.end(ctx.body)
    }
    listen(...args){
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args)
    }
}
module.exports = Koa