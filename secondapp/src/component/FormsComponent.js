import React,{Component} from 'react';

const url="http://localhost:8900/topics";
class FormComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            details:''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }

    handleChangeDetails(event){
        this.setState({details:event.target.value})
    }
    handleSubmit(){
        var id = Math.floor(Math.random()*10000);
        var data ={
            id:id,
            name:this.state.name,
            details:this.state.details
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
        .then(this.props.history.push('/post'))
    }

    render(){
        return(
        <div className="panel panel-info">
            <div className="panel-heading">
                Topic Form
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className="form-control" id="name"
                    value={this.state.name}
                    onChange={this.handleChangeName} />
                </div>
                <div className="form-group">
                    <label for="details">Details</label>
                    <input className="form-control" id="details"
                    value={this.state.details}
                    onChange={this.handleChangeDetails}/>
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


export default FormComponent

