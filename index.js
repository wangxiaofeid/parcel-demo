import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import "babel-polyfill";
import { LazyRoute } from "./components";
import AppStore from './stores/appStore';
import App from "./app";
import Home from "./pages/home";

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
                <Route exact path="/" component={Home} />
                <Route exact path="/page1" render={props => (
                    <LazyRoute {...props} component={import("./pages/page1")} />
                )}/>
            </App>
        </Router>
    </Provider>,
    MOUNT_NODE
);
