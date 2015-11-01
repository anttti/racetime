import "babel-core/polyfill";

import Immutable from "immutable";
import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLoggerMiddleware from "redux-logger";
import { Provider } from "react-redux";
import { reduxReactRouter } from "redux-router";
import createHistory from "history/lib/createBrowserHistory";
import routes from "./routes";

import rootReducer from "./reducers";

import * as TrackActions from "./actions/track";
import App from "./containers/App";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLoggerMiddleware({
        collapsed: true,
        transformer: state => {
            let newState = {};
            for (let i of Object.keys(state)) {
                if (Immutable.Iterable.isIterable(state[i])) {
                    newState[i] = state[i].toJS();
                } else {
                    newState[i] = state[i];
                }
            }
            return newState;
        }
    })
)(createStore);

const store = compose(
    reduxReactRouter({ createHistory })
)(createStoreWithMiddleware)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        {routes(store)}
    </Provider>,
    document.getElementById("app")
);
