import React from "react";
import './post.styles.scss';
import { useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title, author } = post;
    const navigate = useNavigate();
    return (
        <div onDoubleClick={() => {navigate(`${id}`)}}>
            <h3>{id}. {title}</h3>
            <p>by {author}</p>
            <button onClick={() => {
                fetch(`http://localhost:3000/posts/${id}`, 
                    {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        }
                    }
                )
                .then(res => res.json())
                .then(data => navigate('/posts'))
                .catch(e => console.error(e.message))
            }}>Удалить пост</button>
        </div>
    )
}

export default Post;