import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from'./reducers/all';

var middleware;

if (process.env.NODE_ENV !== "production") {
	middleware = applyMiddleware(promise(), thunk, logger());
} else {
	middleware = applyMiddleware(promise(), thunk);
}

export default createStore(reducer, middleware);