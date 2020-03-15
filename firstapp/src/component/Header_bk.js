import React, {Component, Fragment } from 'react';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'React Visual APP',
            desc: 'ly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and '
        }
    }

    render(){
        const mystate = this.state;

        const mystyle ={
            headers:{
                backgroundColor:'teal'
            },
            logo:{
                fontSize:'30px',
                color:'#fff',
                textAlign:'center'
            }
        }
        return(
            <Fragment>
                <header style={mystyle.headers}>
                    <div style={mystyle.logo}>
                        {this.state.title}
                    </div>
                    <center>
                        <input/>
                    </center>
                </header>
                <hr/>
                <p>{mystate.desc}</p>
            </Fragment>
        )
    }
}

export default Header;

/*
export default  Header = () => {
    return(
        <Fragment>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </Fragment>
    )
}
export default  Header1 = () => {
    return(
        <Fragment>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </Fragment>
    )
}
*/
