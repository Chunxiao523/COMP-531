import React from 'react'
import {connect} from 'react-redux'
import {delFollower} from './followingAction.js'
export const Userfriend = ({delFollower, name, avatar, headline}) => {
    return(
	    <tr className="follower">
	      <td>
	        <img src={avatar} className="follow"/>
	        <p id="followerName">{name}</p>
	        <p>{headline}</p>
	        <input id="unfollowBtn" type="button" value="Unfollow" onClick={()=>delFollower(name)}/> 
	      </td>
	    </tr>
    )
}
export default connect(null, (dispatch) => ({
	delFollower: (value) => dispatch(delFollower(value))
}))(Userfriend)