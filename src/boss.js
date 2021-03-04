import React, { Component, Fragment } from 'react';
import {CSSTransition,TransitionGroup} from "react-transition-group";
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:false
         }
         this.toadd=this.toadd.bind(this);
    }
    toadd(){
        this.setState({
            isShow:this.state.isShow ? false:true
        })
    }
    render() { 
        return ( 
            <div>
                <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text" unmountOnExit>
                <div >
                    超级辣
                </div>    
                </CSSTransition>      
                <button onClick={this.toadd}>
                    加辣
                </button>
            </div>
         );
    }
}
 
export default Boss;