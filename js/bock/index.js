function Book(isbn,title,author){
    this.setIsbn(isbn)

//     this.isbn=isbn;
//     this.title=title;
//     this.author=author;
// 
}
Book.prototype = {
    setIsbn(isbn){
        //private 私有属性 方法内this.调用，外界不能访问 js中不存在private，约定以_开头的就是私有属性
        if(this.checkIsbn(isbn))
            throw new Error()
        
            
        this._isbn=isbn
    },
    getIsbn(){
        return this._isbn;

    },
    checkIsbn(isbn){
        if(!isbn) return false
        return (/\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn))
    }

}
const jsDontknow =  new Book('978','全栈','王嘉新');
//console.log(jsDontknow.__proto__==Book.prototype);
console.log(jsDontknow instanceof Book);//instanceof运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
console.log(Book.isPrototypeOf(jsDontknow));
console.log(Book.prototype.isPrototypeOf(jsDontknow));
console.log(jsDontknow.getIsbn());