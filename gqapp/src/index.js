import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
});

const GET_PRODUCTS = gql`
query product($id:Int)
{
    product(id:$id){
        name,
        price,
        category
    }
}
`
class ProductList extends Component{
    constructor(props){
        super(props)

        this.state={
            id:4
        }
    }

    render(){
        return(
            <div>
                <h1>GQLAPP</h1>
                <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                    {({loading,error,data}) => {
                        if(loading) return <p>Loading.....</p>
                        if(error) return <p>Error.....</p>
                        return(
                            <div>
                                <p>{data.product.name}</p>
                                <p>{data.product.category}</p>
                                <p>{data.product.price}</p>
                            </div>
                        )
                    }}

                </Query>        
            </div>
        )
    }
}


ReactDOM.render(<ProductList/>, document.getElementById('root'));


