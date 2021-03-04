import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
class Store extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    
    render() { 
        return ( 
            <Fragment>
                {this.props.must}
            <div >
                {this.props.content}
                
                <button onClick={this.handleClick}>删除</button>
            </div>
            </Fragment> 
        );
    }
    handleClick(){
       
        this.props.deleteItem(this.props.index)//向父组件传值
    }
}
// 要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性：
Store.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    must:PropTypes.string.isRequired
}
Store.defaultProps={
    must:"鸳鸯锅"
}
export default Store;