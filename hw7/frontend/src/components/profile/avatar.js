import React from 'react';
import { connect } from 'react-redux'
import { uploadimage } from './profileAction.js'
	
export const Avatar = ({avatar, dispatch}) => {

let file
const handleImageChange = (e) => {
	    e.preventDefault()
	    file = e.target.files[0];
	    dispatch(uploadimage(file))
       // uploadimage(file)
}
	return (
		<div>
			<div>
				<img className="col-sm-2 profile_icon" src={avatar} />
			</div>
			<div className="update_button" > 
				<input type="file" accept="image/*" className="btn btn-default btn-sm" onChange={(e) => handleImageChange(e)}/>                  
				
			</div>
		</div>
	)
}

export default connect(
	(state) => {
		return {
			avatar: state.profile.avatar
		}
	})(Avatar)