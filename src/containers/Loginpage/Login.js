import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Header from "../../header/Header";
import './Login.css';
import App from '../../App';

class Login extends Component {
    
    state = {
        
        email: "",
        loginErrors: "",
        loadeduser: null,
        loaduserid:null,
        
    };
    componentDidMount() {
        console.log("mounted");
       
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        let email = this.state.email
        if (this.state.email) {
            axios.get('/users?email=' + email)
                .then(response => {
                    window.localStorage.setItem('useid', response.data[0].id)
                    this.setState({ loadeduser: response.data })
                   // console.log(response);
                   // console.log(this.state.loadeduser[0].id)
                    let id = this.state.loadeduser[0].id
                    
                    this.setState({
                        loaduserid: id,
                        setflag: true
                    })
                    
                    
                    
                    console.log(this.state.loaduserid)
                })
                .catch(Error => {
                    console.log("please provide valid id");
                    this.setState({ loginErrors: true })
                })

            
        }
        
    }

    render() {
       // const referer = this.props.location.state ? this.props.location.state.referer.pathname : '/';
        let error = null;
        //let id = this.state.loadeduser[0].id
        if (this.state.loginErrors) {
          error=  <h3>Please provide valid email</h3>
        }
        let app = null;
        if (this.state.loaduserid) {
            //return <Header />
            
            return (
               <div>
                <Redirect to={{ pathname: "/Posts" }} />
                 
                    <Route path="/Posts" render={() => <Posts id={this.state.loaduserid} />} />
                    </div>
                )
                    
                
        }

        return (
            <div className="login">
                {error}       
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                                required />
                                <button onClick={this.handleSubmit}>                           
                    Login</button>
                
            </div>
        );
    }
}

export default Login;