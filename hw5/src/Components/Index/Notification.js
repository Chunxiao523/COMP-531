import React from 'react'
import {connect} from 'react-redux'
//notification component to tell the user for wrong input
export const Notification = ({error}) => {
	let note=""
	if (error=="Error: Unauthorized") 
		note="Your username or password is wrong"
	else note=""
	return(
	<div className="notif">
	    <p>{note}</p>
	</div>)
}

export default connect((state) => {
	return {
		error:state.check.error
	}
})(Notification)