import {combineReducers} from "redux";
import {testReducer} from "./testReducer";

import { postsReducer } from "./posts/posts.reducers.js";
import { profilesReducer } from "./profiles/profiles.reducers.js";

export const reducers = combineReducers({
    testReducer,
    posts: postsReducer,
    profiles: profilesReducer
})