require('expose?$!expose?jQuery!jquery')
require("bootstrap-webpack")
// require('./mystyle.css')

import React from 'react'
import { render } from 'react-dom'
import IndexPageContainer from "./IndexPageContainer.js"

render(
	<IndexPageContainer/>, document.getElementById('app')
);

