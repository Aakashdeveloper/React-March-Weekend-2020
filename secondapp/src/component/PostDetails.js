import React, {Component} from 'react';
import axios from 'axios';

const url="http://localhost:8900/topics";
class PostDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

/*
    componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({details:response.data})
        })
    }
*/
    async componentDidMount(){
        const response = await axios.get(`${url}/${this.props.match.params.id}`)
        const mydata = response.data
        this.setState({details:mydata})
    }

    render(){
        console.log(this.props.match.params.id)
        const mydetails = this.state.details
        return(
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        Details Page
                    </div>
                    <div className="panel-body">
                        <div className="jumbotron">
                            <h3>About {mydetails.name}</h3>
                            <p>{mydetails.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails