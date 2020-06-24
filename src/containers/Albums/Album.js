import React from 'react';
import { Component } from 'react';
import Header from '../../header/Header';
import { Route,Link } from 'react-router-dom';
import axios from 'axios';
import UserPosts from '../Posts/UserPosts/UserPosts';
import Fullalbum from '../Albums/fullalbum/Fullalbum';

class Album extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        let userid = window.localStorage.getItem('useid')
        axios.get('/albums?userId=' + userid)
            .then(response => {
                console.log(response.data)
                this.setState({ albums: response.data })
            })
    }
    render() {
        console.log(this.props); 
        let albums = null;
        if (this.props.id) {
            albums = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.albums) {
            albums = this.state.albums.map(album => {
                return (
                    <Link
                        to={'/Albums/' + album.id}
                        key={album.id}>
                    <UserPosts
                        key={album.id}
                        title={album.title}
                        
                        />
                    </Link>
                );
            })
            }
        return (
            <div>
                <Header/>
                    
                    <tr><td>
                    <section className="Posts">
                        {albums}
                        </section>
                    </td>
                        <td>
                            <Route path={this.props.match.url + '/:id'} exact component={Fullalbum} />
                        </td>
                        </tr>
                
            </div>
        );
    }
}

export default Album;