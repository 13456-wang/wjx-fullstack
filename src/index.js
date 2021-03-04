import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app'
import A from './a'
ReactDOM.render(
    // ReactDOM.render是React的最基本方法用于将模板转为HTML语言
    <A />,
    document.getElementById('root')//getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用
)