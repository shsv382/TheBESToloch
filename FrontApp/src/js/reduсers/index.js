import {combineReducers} from "redux";
import {testReducer} from "./testReducer";

export const reducers = combineReducers({
    testReducer,
    posts: postsReducer,
    profiles: profilesReducer
})