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
// import { thunkMiddleware } from "redux-thunk";
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
                <Route path={'/profiles'} element={<ProfilesPage />}/>
            </Routes>
        </Router>
    </Provider>
    , document.getElementById("application"))
