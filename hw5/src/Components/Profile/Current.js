import React from 'react';
import { connect } from 'react-redux'
//current user information
export const Current = ({dispatch, username, avatar, email, zipcode}) => {
        return (
        <div class="col-md-4">
				<h3><p>Current Information</p></h3>	
				<div>
					<img class="profile_icon" src={avatar} />
				</div>
				<div class="update_button" > 
                    <input type="file" class="btn btn-default btn-sm"/>                  
                </div>
                <div class="current_profile">
			       	<table class="table-hover">
							<tr>
								<td class="col-md-6">Display name: </td>
								<td><p id="curname">{username}</p></td>
							</tr>
							<tr>
								<td class="col-md-6">E-mail address: </td>
								<td><p id="curaddress">{email}</p></td>
							</tr>
							<tr>
								<td class="col-md-6">Zip code: </td>
								<td><p id="curzip">{zipcode}</p></td>		
							</tr>
						</table>
			    </div>
			
        </div>
  	)
}

export default connect(
    (state) => {
        return {
            username: state.profile.username,
            avatar: state.profile.avatar,
            email: state.profile.email,
            zipcode: state.profile.zipcode
        }
    }
)(Current)