import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router } from 'react-router-dom';
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reduecer from './reducer/reducers'
import Routes from './route/index'
import './index.css';
import * as serviceWorker from './serviceWorker';
const reduxTool = window.devToolsExtension?window.devToolsExtension():fn=>fn;

const store = createStore(Reduecer,compose(
    applyMiddleware(thunk),
    reduxTool
));
ReactDOM.render(
    (<Provider store={store}>
    <Router>
        <Routes></Routes>
    </Router>
    </Provider>),
    document.getElementById('root'));
serviceWorker.unregister();

