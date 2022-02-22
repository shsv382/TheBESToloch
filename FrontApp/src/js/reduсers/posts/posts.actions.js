import { postsActionTypes } from './posts.types';

export const fetchPostsPending = () => ({
    type: postsActionTypes.FETCH_POSTS_PENDING
});

export const fetchPostsSuccess = (posts) => ({
    type: postsActionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsError = (errorMessage) => ({
    type: postsActionTypes.FETCH_POSTS_ERROR,
    payload: error.message
});

// export const fetchPostsAsync = () => (dispatch) => ({
    
// })