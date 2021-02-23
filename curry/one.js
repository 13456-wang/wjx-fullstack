var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    //call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。
    //arguments 并非数组，只是访问单个参数的方式与访问数组元素的方式相同。
    //因此在使用slice方法的时候，需要用类似[].slice.call(arguments, 1) 的这种方式去调用
    console.log(args,arguments)
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        console.log(newArgs,args,[].slice.call(arguments),arguments)
        // console.log(this)
        return fn.apply(this, newArgs);
    };
};
function add(a, b) {
    return a + b;
}
var addCurry = curry(add, 1, 2);
addCurry() // 3
var addCurry = curry(add, 1);
addCurry(2) // 3
var addCurry = curry(add);
// addCurry(1, 2) // 3
console.log(addCurry(1, 2))
