import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import Post from "../../containers/post/post.component.jsx";

import { fetchPosts } from "../../reduсers/posts/posts.actions";

const PostsPage = ({ posts, pending, errorMessage, fetchPosts }) => {
    useEffect(() => {
        fetchPosts();
    }, [])
    console.log(posts, pending, errorMessage)
    return (
        <div>
            <h1>Posts</h1>
            {
                pending ?
                    "Загрузка..." :
                    errorMessage ? 
                        `${errorMessage}` :
                        posts.length && posts.map(post => (<Post post={post} key={post.id} />))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    pending: state.posts.pending,
    errorMessage: state.posts.errorMessage
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);