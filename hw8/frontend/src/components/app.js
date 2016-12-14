import React from 'react'
import {connect} from 'react-redux'
import Profile from './profile/profile.js'
import Main from './main/main.js'
import StartPage from './index/landing.js'
//routing component
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