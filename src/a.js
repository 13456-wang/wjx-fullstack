import React,{Component} from 'react';//imrc
import './style.css';
import PropTypes from "prop-types";
import axios from "axios";
import Store from "./store";
import Boss from "./boss";
import {CSSTransition,TransitionGroup} from "react-transition-group";
class A extends Component {//cc
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['虾滑','娃娃菜'] //添加列表
        }
    }
    // componentDidMount(){
    //     axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    //     .then((res)=>{console.log('axios获取数据成功:'+JSON.stringify(res))
    //     this.setState({
    //         list:res.data.data
    //     })
    // })
    //     .catch((error)=>{console.log('axios数据获取失败'+error)})
    // }
    inputChange(e){
        this.setState({
            // inputValue:e.target.value
            inputValue:this.input.value
        })
        // console.log(e.target.value);
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('div').length)
        })
        
    }
    deleteItem(index){
        let List =this.state.list
        List.splice(index,1)
        //splice() 方法向从数组中添加删除项目，然后返回被删除的项目
        this.setState({
            list:List//list:List.state.list React禁止直接操作state

        })
    }

    render() { 
        return ( 
            <div>
                <div>
                    <label htmlFor="add">加入</label>
                    <input id="add" className="input" must="锅底" value={this.state.inputValue} 
                        ref={(input)=>{this.input=input}} onChange={this.inputChange.bind(this)}/>
                    {/* onchange 事件会在域的内容改变时发生 */}  
                    <button onClick={this.addList.bind(this)}>
                        添加
                    </button>                  
                </div>
                <ul ref={(ul) => {this.ul=ul}}>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                            <CSSTransition timeout={2000} classNames="boss-text" unmountOnExit >
                                <li  key={index}>
                                    {/* {item} */}
                                    <Store content={item}  index={index}  deleteItem={this.deleteItem.bind(this)}/>           
                                </li>     
                            </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <div>
                    <Boss />
                </div>
            </div>
         );
    }
}
 
export default A;