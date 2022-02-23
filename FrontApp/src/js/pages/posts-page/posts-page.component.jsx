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
            <button onClick={() => {
                fetch(`http://localhost:3000/posts/`, 
                    {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            title: `title${posts.length+1}`,
                            author: 'typicode1'
                        })
                    }
                )
                .then(res => res.json())
                .then(data => navigate('/posts'))
                .catch(e => console.error(e.message))
            }}>Добавить пост</button>
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