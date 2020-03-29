import React,{Component} from 'react';
import {moviesList} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import DisplayComp from '../component/Displaylist';

class App extends Component {

    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <h1> Redux</h1>
                <DisplayComp datalist={this.props.mydata}/>
            </div>
        )
    }
    
}

//This is will recive state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.Movies
    }
}

//This is dispatch the actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);