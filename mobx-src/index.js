import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
// 任何复杂应用都可以细分
// 组件和数据分离

import store from './store'
//组件与数据流的模块化
import {Provider} from 'mobx-react';
//给我们组件提供状态管理 
ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.body
)