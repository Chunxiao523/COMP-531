require('expose?$!expose?jQuery!jquery')
require("bootstrap-webpack")
// require('./mystyle.css')

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initialVisit } from './action.js'
import Reducer from "./reducers.js"
import App from "./components/app.js"
const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(thunkMiddleware))
//main javascript file

store.dispatch(initialVisit())
render( <Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('app')
)
