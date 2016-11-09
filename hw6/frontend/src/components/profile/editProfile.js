import React from 'react';
import { connect } from 'react-redux'
import { updateprofile } from './profileAction.js'
//field to edit user information
export const EditProfile = ({dispatch}) => {
	let username, headline, avatar, email, zipcode, pw, pwconf
        return (
        <div className="col-md-6">
        	<div className="update_profile">
	           <table className="table-hover">
	           <tbody>
						<tr>
							<td colSpan="2"><h3><p>Change profile value</p></h3></td>
	  						<td></td>
						</tr>
						<tr>
							<td className="col-md-3"><p>Display name: </p></td>
	  						<td className="col-md-3"><input type="text" id="name" ref = {(node) => username = node}  /></td>
						</tr>
						<tr>
							<td className="col-md-3"><p>E-mail address: </p></td>
	  						<td className="col-md-3"><input type="text" id="address" ref = {(node) => email = node} /></td>
						</tr>
						<tr>
							<td className="col-md-3"><p>Zip code: </p></td>
	  						<td className="col-md-3"><input type="text" id="zip" ref = {(node) => zipcode = node} /></td> 			
						</tr>
						<tr>
							<td className="col-md-3"><p>Password: </p></td>
	  						<td className="col-md-3"><input type="password" id="password" ref = {(node) => pw = node} /></td> 			
						</tr>
						<tr>
							<td className="col-md-3"><p>Password Confirmed: </p></td>
	  						<td className="col-md-3"><input type="password" id="pwconf" ref = {(node) => pwconf = node} /></td> 			
						</tr>
						<tr>
							<td colSpan="2" >
	                    		<button type="button" id="updateInformation" className="btn btn-default btn-sm" onClick={()=>{
                     				dispatch(updateprofile( email.value, zipcode.value, pw.value, pwconf.value))}}>
	                            	Update
	                    		</button> 
	                 		</td>
						</tr>
						</tbody>
					</table>
				</div>
        </div>
    )
}

export default connect()(EditProfile)