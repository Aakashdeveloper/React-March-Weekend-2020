import React,{Component} from 'react';
import DisplayPost from './DisplayPost';

const url="http://localhost:8900/topics";

class Post extends Component{

    constructor(){
        super()

        this.state={
            topics:''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({topics:data})
        })
    }

    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                 <div class="panel panel-success">
                    <div class="panel-heading">Post Heading</div>
                    <div class="panel-body">
                        <DisplayPost topicdata={this.state.topics}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Post;