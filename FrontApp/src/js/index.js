import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./reduсers";
import {BrowserRouter as Router} from "react-router-dom";
import {Application} from "./containers/Application";
import {Route, Routes} from "react-router";
import PostsPage from './pages/posts-page/posts-page.component.jsx';
import ProfilesPage from './pages/profiles-page/profiles-page.component.jsx';


console.log("Hello World!");

const store = createStore(reducers);

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
