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
        </div>
    )
}

export default Post;