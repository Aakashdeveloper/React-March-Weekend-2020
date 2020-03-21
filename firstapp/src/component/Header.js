import React, {Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'React Visual APP',
            desc: 'ly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and',
            userInput:'User Text here'
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({"userInput":event.target.value})
        this.props.userText(event.target.value)
    }

    render(){
        const mystate = this.state;
        return(
            <Fragment>
                <header>
                    <div className="logo">
                        {this.state.title}
                    </div>
                    <center>
                        <input onChange={this.inputChanges.bind(this)}/>
                        <select onChange={this.inputChanges.bind(this)}>
                            <option value="New">New</option>
                            <option value="React">React</option>
                        </select>
                        <h4>{this.state.userInput}</h4>
                    </center>
                </header>
                <hr/>
                <div className="jumbotron">
                    <h1>React News</h1>
                    <p>{mystate.desc}</p>
                </div>
            </Fragment>
        )
    }
}


export default Header;
