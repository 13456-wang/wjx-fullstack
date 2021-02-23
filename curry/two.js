function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) { 
    console.log(fn.length , length,'-')
    length = length || fn.length;
    //只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。
    //只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。
    console.log(length,'--')
    var slice = Array.prototype.slice;
    console.log(Array.prototype.slice , '---')
    return function() {
        console.log(arguments , arguments.length , length , '----')

        if (arguments.length < length) {       
            var combined = [fn].concat(slice.call(arguments));
            console.log(fn ,'-', combined , '-----')
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}
var fn = curry(function(a, b, c) {
    return [a, b, c];
});
// console.log(fn("a", "b", "c"))
// console.log(fn("a")("b")("c"))
// console.log(fn("a")("b", "c"))
console.log(fn("a", "b")("c"))


