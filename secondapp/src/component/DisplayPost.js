import React from 'react';
import {Link} from 'react-router-dom';

const DisplayPost = (props) => {

    const renderList = ({topicdata}) => {
        if(topicdata){
            return topicdata.map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Link to={`/post/${item.id}`}>Details</Link>
                    </div>
                )
            })
        }
        if(!topicdata){
            return(
                <div>
                    <h1>loading....</h1>
                </div>
            )
        }       
    }

    return(
        <div>
            {renderList(props)}
        </div>
    )
}

export default DisplayPost;