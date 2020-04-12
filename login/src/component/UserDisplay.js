import React from 'react';
import {Link} from 'react-router-dom';

const UserDisplay = (props) => {

    const RenderList = ({userData}) => {
        if(userData){
            return userData.map((item) =>{
                return(
                    
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                        
                )
            })
        }
    }

    return(
        <div className>
            <h4>List of users</h4>
            <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RenderList(props)}
                            </tbody>
                        </table>
            </div>
        </div>
    )
}
export default UserDisplay;