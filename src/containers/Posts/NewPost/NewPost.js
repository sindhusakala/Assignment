import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../../../header/Header';
import './NewPost.css';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                this.props.history.replace('/posts');
                 this.setState( { submitted: true } );
            });
    }

    render() {
        
        return (

            <div className="NewPost">
                <Header/>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} />

                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;