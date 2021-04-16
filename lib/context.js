//打造ctx
let proto = {
    // url:request.url

}
function defineGetter(props,name){
    //__defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，
    //当那个属性的值被读取时，你所绑定的函数就会被调用。
    proto.__defineGetter__(name,function(){
        return this[prop][name] //this ==ctx
    })
}
defineGetter('request','url')//url==request.url
defineGetter('request','path')
module.exports = proto