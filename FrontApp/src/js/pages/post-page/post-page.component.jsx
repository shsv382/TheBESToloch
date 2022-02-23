import React from "react";
import './post-page.styles.scss';

import { useParams } from "react-router";
import useFetch from "../../effects/use-fetch.effect";

const PostPage = () => {
    const params = useParams();
    const post = useFetch(`http://localhost:3000/posts/${params.id}`);
    return !post ? 
    `Загрузка` :
    (
        <div>
            <h1>{post.id}: {post.title}</h1>
            <p>by {post.author}</p>
        </div>
    )
}

export default PostPage;