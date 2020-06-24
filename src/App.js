import React from 'react';
import './App.css';
import Login from './containers/Loginpage/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './containers/Posts/Posts';
import UserPosts from './containers/Posts/UserPosts/UserPosts';
import Header from './header/Header';
import Album from './containers/Albums/Album';
import NewPost from './containers/Posts/NewPost/NewPost';
function App(props) {
    return (
        
            <BrowserRouter>
                <div className="App">              
                    <switch>
                        <Route path="/Posts" component={Posts} />                        
                        <Route path='/Header' component={Header} />
                        <Route path='/UserPosts' component={UserPosts} />
                        <Route path="/Albums" component={Album} />
                        <Route exact path='/' component={Login} />
                        <Route exact path='/NewPost' component={NewPost} />  
                    </switch>                  
            </div>
            </BrowserRouter>
       
  );
}

export default App;
