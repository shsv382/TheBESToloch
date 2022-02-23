import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';
import {reducers} from "./reduсers";
import {BrowserRouter as Router} from "react-router-dom";
import {Application} from "./containers/Application";
import {Route, Routes} from "react-router";
import PostsPage from './pages/posts-page/posts-page.component.jsx';
import ProfilesPage from './pages/profiles-page/profiles-page.component.jsx';
import PostPage from './pages/post-page/post-page.component.jsx';
import ProfilePage from './pages/profile-page/profile-page.component.jsx';
import thunk from 'redux-thunk';


console.log("Hello World!");

const logger = createLogger();
const middlewares = [thunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path={'/'} element={<Application />}/>
                <Route path={'/posts'} element={<PostsPage />}/>
                <Route path={'/profile'} element={<ProfilesPage />}/>
                <Route path={'/posts/:id'} element={<PostPage />}/>
                <Route path={'/profile/:id'} element={<ProfilePage />}/>
            </Routes>
        </Router>
    </Provider>
    , document.getElementById("application"))
