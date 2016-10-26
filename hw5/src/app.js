import React from 'react'
import {connect} from 'react-redux'
import Profile from './Components/Profile.js'
import Main from './Components/Main.js'
import StartPage from './Components/StartPage.js'
export const App = ({location}) => {
	let page
	if (location=='START') {
		page = <StartPage />
	}
	else if (location=='MAIN') {
		page = <Main />
	} 
	else if (location=='PROFILE') {
		page = <Profile />
	} 
	else {
		page = <StartPage />
	}
	return (
		<div>
			{page}
		</div>
		)
}

export default connect(
	(state) => {
		return {
			location: state.location
		}
	}
)(App)