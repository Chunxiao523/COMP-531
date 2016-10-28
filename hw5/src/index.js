require('expose?$!expose?jQuery!jquery')
require("bootstrap-webpack")
// require('./mystyle.css')

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { initialVisit } from './Components/action.js'
import Reducer from "./reducers.js"
import App from "./app.js"
const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(logger))

render( <Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('app')
)
