import { postsActionTypes } from './posts.types';
import 'regenerator-runtime/runtime';

export const fetchPostsPending = () => ({
    type: postsActionTypes.FETCH_POSTS_PENDING
});

export const fetchPostsSuccess = (posts) => ({
    type: postsActionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsError = (errorMessage) => ({
    type: postsActionTypes.FETCH_POSTS_ERROR,
    payload: errorMessage
});

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsPending())
    try {
        const res = await fetch('http://localhost:3000/posts');
        const data = await res.json();
        dispatch(fetchPostsSuccess(data))
    } catch(error) {
        dispatch(fetchPostsError(error.message))
    }
}