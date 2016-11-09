import React from 'react'
import {connect} from 'react-redux'
//notification component to tell the user for wrong input
export const Notification = ({error, success}) => {
	let note=""
	if (error.length != 0) {
		note = error
	}
	// error ===  ? "" : note="Your username or password is wrong"
	if (success != 0) {
		note = success
	}
	return(
	<div id="notif" className="notif">
	    <p>{note}</p>
	</div>)
}

export default connect((state) => {
	return {
		error:state.check.error,
		success: state.check.success
	}
})(Notification)