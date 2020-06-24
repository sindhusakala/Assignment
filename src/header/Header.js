import React, { Component } from 'react';
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
class Header extends Component {
    handlelogout=()=>{
        localStorage.clear();
        window.location.href = '/';
}
    render() {
        return (
            <div className="Header">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to={{
                                    pathname: '/Posts'
                                }}

                            >Posts</NavLink></li>
                           
                            <li><NavLink to={{
                                pathname: '/Albums'
                            }}>Albums</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/NewPost',
                            }}>NewPost</NavLink></li>
                            <li><Link onClick={()=>this.handlelogout()}
                            >Logout</Link></li>
                        </ul>
                    </nav>
                </header>
               
                </div>
            )
    }
}
export default Header;