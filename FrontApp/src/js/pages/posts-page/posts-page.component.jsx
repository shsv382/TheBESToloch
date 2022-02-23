import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "../../containers/post/post.component.jsx";

import { fetchPosts } from "../../reduсers/posts/posts.actions";

const PostsPage = () => {
    // получаем кусок state с постами
    const { posts, pending, errorMessage } = useSelector((state) => state.posts)

    // componentDidMount, запрос постов
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div>
            <h1>Posts</h1>
            {
                pending ?
                    "Загрузка..." :
                    errorMessage ? 
                        `${errorMessage}` : // можно сделать отдельный компонент
                        posts.length && posts.map(post => (<Post post={post} key={post.id} />))
            }
        </div>
    )
}

export default PostsPage;