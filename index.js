import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import "babel-polyfill";
import AppStore from './store/appStore';
import App from "./app";
import Home from "./page/home";

const appStore = new AppStore();

const stores = {
    appStore
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider
        {...stores}
    >
        <Router>
            <App>
                <Route exact path="/" component={Home}/>
            </App>
        </Router>
    </Provider>,
    MOUNT_NODE
);
