import React, {Component, Fragment} from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*
    var a =  [10,2,30,43,24,82,45,23,12,56,85]
                    a.filter((data) => { return data>50})
    */
    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    
    }

    render(){
        //console.log(this.state.news)
        return(
            <Fragment>
                <Header userText={(mytext)=>{this.filterNews(mytext)}}/>
                <NewsDisplay datalist={this.state.filtered}/>
            </Fragment>
        )
    }
}

export default Home;

/*
<a href=""></a>
<img src=""/>


var a = 10
var b = 20

function add(a,b){
    return a+b
}

add(1,2)
*/
