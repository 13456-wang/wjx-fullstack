function curry(fn, args, holes) {
    length = fn.length;
    args = args || [];
    holes = holes || [];
    console.log( 'length =', length ,' args =',args ,' holes =',
     holes ,'-')

    return function() {
        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg, i, index = 0;
        console.log( '_args =',_args,' _holes =' , _holes ,
        ' argslen =', argsLen , ' holesLen =',holesLen,
        ' arguments =',arguments,'--' )
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
            if (arg === _ && holesLen) {
                console.log(arg , holesLen ,index,'第一个if')
                index++
                if (index > holesLen) {
                    console.log('第一个if中的if')
                    _args.push(arg);
                    _holes.push(argsLen - 1 + index - holesLen)
                    console.log( _args,_holes,'-------')
                }
            }
            // 处理类似 fn(1)(_) 这种情况
            else if (arg === _) {
                console.log('arg',arg,' argsLen', argsLen+i ,' 第二个if')
                _args.push(arg);
                _holes.push(argsLen + i);
                console.log(_args, _holes )
            }
            // 处理类似 fn(_, 2)(1) 这种情况
            else if (holesLen) {
                console.log('index',index,'第三个if')
                // fn(_, 2)(_, 3)
                if (index >= holesLen) {
                    _args.push(arg);
                    console.log('第三个if中的if')
                }
                // fn(_, 2)(1) 用参数 1 替换占位符
                else {
                    console.log(arg,_args,_holes,'第三个if中的else')
                    _args.splice(_holes[index], 1, arg);
                    _holes.splice(index, 1)
                    console.log(arg,_args,_holes)
                }
            }
            else {
                console.log('第四个if')
                _args.push(arg);
            }

        }
        if (_holes.length || _args.length < length) {
            console.log(_holes.length , _args.length , length,'---------')
            return curry.call(this, fn, _args, _holes);
        }
        else {
            console.log('数组满 输出')
            return fn.apply(this, _args);
        }
    }
}

var _ = {};

var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
});

// 验证 输出全部都是 [1, 2, 3, 4, 5]
// fn(1, 2, 3, 4, 5);
// fn(_, 2, 3, 4, 5)(1);
// fn(1, _, 3, 4, 5)(2);
// fn(1, _, 3)(_, 4)(2)(5);
// fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5)