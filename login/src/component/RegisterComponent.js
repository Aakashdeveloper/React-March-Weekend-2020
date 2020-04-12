import React,{Component} from 'react';

const url="http://localhost:5000/api/auth/register";
class RegisterComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }

    handleChangeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    handleChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit=()=>{
        var data ={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        console.log(data)
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
        <div className="panel panel-info">
            <div className="panel-heading">
                Register Form
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className="form-control" id="name"
                    value={this.state.name}
                    onChange={this.handleChangeName} />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input className="form-control" id="email"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input className="form-control" id="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}/>
                </div>
                <button className="btn btn-success"
                onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>

        </div>
        )

    }
}


export default RegisterComponent;

