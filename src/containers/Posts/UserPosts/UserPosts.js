import React from 'react';
import './UserPosts.css';
const UserPosts=(props)=> {
   
    return (
        <article className="Post" onClick={props.clicked}>
                
            <h1>{props.title}</h1>
            <p>{props.name}</p>
                <p>{props.body}</p>
                <div className="Info">
                    <div className="Author">{props.body}</div>
                </div>
            </article>
            );
    }

export default UserPosts;