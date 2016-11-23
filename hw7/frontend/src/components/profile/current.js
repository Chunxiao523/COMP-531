import React from 'react';
import { connect } from 'react-redux'
import {uploadimage} from './profileAction.js'
//current user information
export const Current = ({dispatch, username, avatar, email, zipcode, birthday}) => {
        return (
        <div className="col-md-4 col-md-offset-1 card card-block">
				<h3><p>Current Information</p></h3>		
                <div className="current_profile">
			        <div className="form-group row">
				        <label>Display Name:</label>
				        <label id="defaultname">{username}</label> 
				      </div>
				      <div className="form-group row">
				       <label>Email:</label>
				       <label id="defaultemail">{email}</label>
				     </div>
				     <div className="form-group row">
				       <label>Zipcode:</label>
				       <label id="defaultzip">{zipcode}</label>
				     </div>
				     <div className="form-group row">
				       <label>Birthday:</label>
				       <label id="defaultbirthday">{birthday}</label>
				     </div>
			    </div>
			
        </div>
  	)
}

export default connect(
    (state) => {
        return {
            username: state.profile.username,
            email: state.profile.email,
            zipcode: state.profile.zipcode,
            birthday:state.profile.birthday
        }
    }
)(Current)