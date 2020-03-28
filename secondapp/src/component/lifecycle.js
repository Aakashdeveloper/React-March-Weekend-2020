//1 Get Default State
//2 Set Initial State
//3 Before get created
//4 Render JSX
//5 After Get Created
//6 When you leave the component

import React, {Component} from 'react';


class Lifecycle extends Component {
    //1 Get Default State
    constructor(props){
        console.log(">>>>>>> constructor")
        super(props)

    //2 Set Initial State
        this.state={
            title:'Learning Flow'
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate>>>>", nextState.title)
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //3 Before get created
    componentWillMount(){
        console.log(">>>>>>> componentWillMount")
    }

    componentWillUpdate(){
        console.log(">>>>>>> componentWillUpdate")
    }

    componentDidUpdate(){
        console.log(">>>>>>> componentDidUpdate")
    }


    //4 Render JSX
    render(){
        console.log(">>>>>>> render")
        return(
            <div>
                Lifecycle
                <h2>{this.state.title}</h2>
                <button onClick={()=>{this.setState({title:'Something Else'})}}>
                    Click
                </button>
            </div>
        )
    }

    //5 After get Created
    componentDidMount(){
        console.log(">>>>>>> componentDidMount")
    }

    //6 When you leave the component
    /*componentWillUnmount(){
        alert("Leaving component")
    }*/
    
}

export default Lifecycle;