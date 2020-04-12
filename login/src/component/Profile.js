import React, {Component} from 'react';

const url="http://localhost:5000/api/auth/userinfo";
class Profile extends Component{
    constructor(props){
        super(props)

        this.state={
            user:''
        }

    }
    handleLogout=()=>{
        localStorage.removeItem('Token');
        this.props.history.push('/login');
    }
    render()
    {
        if(localStorage.getItem('Token') == null ){
            this.props.history.push('/login');
        }
        localStorage.setItem('role',this.state.user.role)
        return(
            <div>
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3>User Profile</h3>
                        </div>
                        <div className="panel-body">
                            <h1>Hi {this.state.user.name}</h1>
                            <h2>My Role is {this.state.user.role}</h2>
                            <h3>Email {this.state.user.email}</h3>
                        </div>
                        <button onClick={this.handleLogout} 
                        className="btn btn-danger">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('Token')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;