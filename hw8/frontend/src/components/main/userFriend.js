import React from 'react'
import {connect} from 'react-redux'
import {delFollower} from './followingAction.js'
export const Userfriend = ({delFollower, name, avatar, headline}) => {
    return(
	    <div className="card">
	    	<div className="card-block">
	    			<div className="card-title"><h5  id="follwerName">{name}</h5></div>
	    			<img src={avatar} alt="your image" width="50px" height="50px"/>
	        		<h6 className="card-subtitle text-muted">{headline}</h6>
	        		<button className="btn btn-default dropdown-toggle pull-right btn-sm" onClick={()=>delFollower(name)}>Unfollow</button> 
	    	</div>
         </div>
    )
}
export default connect(null, (dispatch) => ({
	delFollower: (value) => dispatch(delFollower(value))
}))(Userfriend)
