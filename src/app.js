import React,{Component} from 'react'
class App extends Component{
    render(){
        return(
            <ul className ="my-list">
                <li>{false? 'wjx.com':'王嘉新'}</li>
                <li>I Love React</li>
            </ul>
        )
    }
}
export default App;