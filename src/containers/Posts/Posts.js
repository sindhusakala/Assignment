import React from 'react';
import { Component } from 'react';
import Header from '../../header/Header';
import { NavLink, Route, Link } from 'react-router-dom';
import axios from 'axios';
import UserPosts from '../Posts/UserPosts/UserPosts';
import Comments from '../Posts/Comments';

class Posts extends Component {
    state = {
        posts: []        
    }
    componentDidMount() {
        let useid = window.localStorage.getItem('useid')
        console.log(useid);
        axios.get('/posts?userId=' + useid)
            .then(response => {
                console.log(response.data)
                this.setState({
                    posts: response.data,
                    userid: useid
                })
            })
    }  
    render() {
        console.log(this.props);
        let posts = null;
        if (this.props.id) {
            posts = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        

        posts = this.state.posts && this.state.posts.map(post => {
                return (
                    <NavLink
                        to={{
                            pathname: '/posts/' + post.id
                        }}>
                        <UserPosts
                            key={post.id}
                            title={post.title}
                        />
                    </NavLink>
                );
            })
        
        
        return (
            <div>
               <Header/>
                <tr><td>
                    <section className="posts">
                        {posts}
                    </section>
                </td>
                    <td>
                        <Route path={this.props.match.url + '/:id'} exact component={Comments} />
                    </td>
                </tr>
            </div>
        );
    }
}

export default Posts;