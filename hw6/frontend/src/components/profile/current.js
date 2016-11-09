import React from 'react';
import { connect } from 'react-redux'
import {uploadimage} from './profileAction.js'
//current user information
export const Current = ({dispatch, username, avatar, email, zipcode}) => {
        return (
        <div className="col-md-4">
				<h3><p>Current Information</p></h3>		
                <div className="current_profile">
			       	<table className="table-hover">
			       		<tbody>
							<tr>
								<td className="col-md-6">Display name: </td>
								<td><p id="curname">{username}</p></td>
							</tr>
							<tr>
								<td className="col-md-6">E-mail address: </td>
								<td><p id="curaddress">{email}</p></td>
							</tr>
							<tr>
								<td className="col-md-6">Zip code: </td>
								<td><p id="curzip">{zipcode}</p></td>		
							</tr>
							</tbody>
						</table>
			    </div>
			
        </div>
  	)
}

export default connect(
    (state) => {
        return {
            username: state.profile.username,
            email: state.profile.email,
            zipcode: state.profile.zipcode
        }
    }
)(Current)