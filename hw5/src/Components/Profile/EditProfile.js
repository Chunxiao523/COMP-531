import React from 'react';
import { connect } from 'react-redux'
import {update} from '../action.js'
//field to edit user information
export const EditProfile = ({dispatch}) => {
	let username, headline, avatar, email, zipcode
        return (
        <div class="col-md-6">
        	<div class="update_profile">
	           <table class="table-hover">
						<tr>
							<td colspan="2"><h3><p>Change profile value</p></h3></td>
	  						<td></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>Display name: </p></td>
	  						<td class="col-md-3"><input type="text" id="name" ref = {(node) => username = node}  /></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>E-mail address: </p></td>
	  						<td class="col-md-3"><input type="text" id="address" ref = {(node) => email = node} /></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>Zip code: </p></td>
	  						<td class="col-md-3"><input type="text" id="zip" ref = {(node) => zipcode = node} /></td> 			
						</tr>
						<tr>
							<td colspan="2" >
	                    		<button type="button" id="updateInformation" class="btn btn-default btn-sm" onClick={()=>{
                     				dispatch(update(username.value, email.value, zipcode.value))}}>
	                            	Update
	                    		</button> 
	                 		</td>
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
            headline: state.profile.headline,
            avatar: state.profile.avatar,
            email: state.profile.email,
            zipcode: state.profile.zipcode
        }
    }
)(EditProfile)