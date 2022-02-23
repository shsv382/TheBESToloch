import { postsActionTypes } from "./posts.types";

const INITIAL_STATE = {
    posts: [],
    pending: false,
    errorMessage: null
}

export const postsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case (postsActionTypes.FETCH_POSTS_PENDING):
            return {
                ...state, 
                pending: true, 
                errorMessage: null};
        case (postsActionTypes.FETCH_POSTS_SUCCESS):
            return {
                ...state,
                pending: false,
                posts: action.payload,
                errorMessage: null
            }
        case (postsActionTypes.FETCH_POSTS_ERROR):
            return {
                ...state,
                pending: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}