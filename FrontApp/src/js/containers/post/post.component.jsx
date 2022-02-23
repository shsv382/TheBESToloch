import React from "react";
import './post.styles.scss';

const Post = ({ post }) => {
    const { id, title, author } = post;
    return (
        <div>
            <h3>{id}. {title}</h3>
            <p>by {author}</p>
        </div>
    )
}

export default Post;