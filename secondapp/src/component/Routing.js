import React from 'react';
import { BrowserRouter,Route,Link} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Posts from './Post';
import PostDetails from './PostDetails';
import Lifecycle from './lifecycle';
import FormComponent from './FormsComponent';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand">Visual Path</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li> <Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/lifecycle">LifeCycle</Link></li>
                            <li><Link to="/forms">Forms</Link></li>
                        </ul>
                       
                        </div>
                    </div>
                    </nav>
                   
                    
                    
                </header>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/post" component={Posts}></Route>
                <Route path="/post/:id" component={PostDetails}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/lifecycle" component={Lifecycle}></Route>
                <Route path="/forms" component={FormComponent}></Route>
                
            </div>
        </BrowserRouter>
    )                                
}

export default Routing;