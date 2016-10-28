import React from 'react'
import {connect} from 'react-redux'
import Profile from './Components/Profile.js'
import Main from './Components/Main.js'
import StartPage from './Components/StartPage.js'
export const App = ({location}) => {
	   let view
    switch(location) {
        case 'MAIN': view = <Main/>; break;
        case 'PROFILE': view = <Profile/>; break;
        default: view = <StartPage/>; break;
    }
	return (
		<div>
			{view}
		</div>
		)
}

export default connect(
	(state) => {
		return {
			location: state.navi.location
		}
	}
)(App)