import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import UserPosts from '../Posts/UserPosts/UserPosts';
class Comments extends Component {
    state = {
        comments: []
    }
    componentDidMount() {
        this.loadedcomment();
    }
    componentDidUpdate() {
        this.loadedcomment();
    }
    loadedcomment = () => {
        if (this.props.match.params.id) {
            if (!this.state.comments || (this.state.comments && this.state.comments.id !== +this.props.match.params.id)) {
                axios.get("/comments?postId=" + this.props.match.params.id)
                    .then(response => {
                        this.setState({ comments: response.data });
                    });
            }
        }
    }

    render() {
        let comments = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            comments = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.comments) {
            comments = this.state.comments.map(comment => {
                return (

                    <UserPosts
                        key={comment.id}
                        name={comment.name}
                        title={comments.body}
                    />
                        

                );
            })
        }
               

           
        
        return (
            <div>
                <h1>Comments</h1>
            {comments}
               
               </div> 
            )
    }

}
export default Comments;