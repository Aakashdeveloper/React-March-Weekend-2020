import React from 'react';
import {Link} from 'react-router-dom';

const DisplayPost = (props) => {

    const renderList = ({topicdata}) => {
        if(topicdata){
            return topicdata.map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Link to='/'>Details</Link>
                    </div>
                )
            })
        }            
    }

    return(
        <div>
            {renderList(props)}
        </div>
    )
}

export default DisplayPost;