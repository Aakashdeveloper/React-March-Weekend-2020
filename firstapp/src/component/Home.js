import React, {Component, Fragment} from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        //console.log(this.state.news)
        return(
            <Fragment>
                <Header/>
                <NewsDisplay datalist={this.state.news}/>
            </Fragment>
        )
    }
}

export default Home;

/*
<a href=""></a>
<img src=""/>
*/
