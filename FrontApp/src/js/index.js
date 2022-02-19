import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./redusers";
import {BrowserRouter as Router} from "react-router-dom";
import {Application} from "./containers/Application";
import {Route, Routes} from "react-router"


console.log("Hello World!");

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path={'/'} element={<Application />}/>
            </Routes>
        </Router>
    </Provider>
    , document.getElementById("application"))
