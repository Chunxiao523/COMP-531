import React from 'react';
import { connect } from 'react-redux'
import {uploadimage, linkAccount, unlinkAccount} from './profileAction.js'
import {facebookLogin} from '../../action.js'
//current user information
export const Current = ({dispatch, username, avatar, email, zipcode, birthday}) => {
	let pwusername, pwpassword
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
				     <div className="form-group row">
				     <label>Link accounts:</label>
				     	{
				     	username.split("@").length == 2 ?  
	                       <table>
		                       <tbody>
				                  <tr>
			                        <td className="col-md-6"><p>Account Name: </p></td>
			                        <td><input id="username" className="form-control" type="text" ref = {(node) => pwusername = node} /></td>
			                      </tr>
			                      <tr>
			                        <td className="col-md-6"><p>Password: </p></td>
			                        <td><input id="password" className="form-control" type="password"  ref = {(node) => pwpassword = node} /></td>
			                      </tr>
			                      <tr>
			                        <td colSpan="2">
			                            <p>
			                                <button id="login" className="btn btn-default dropdown-toggle pull-right" type="submit" onClick={()=>{
			                                    dispatch(linkAccount(pwusername.value, pwpassword.value))}}>Link Account
			                                </button>
			                          
			                            </p>
			                        </td>
			                      </tr>
	                      		</tbody>
                      		</table> : 
                      		<div>
	                      		<span className="btn btn-primary" onClick={() => { dispatch(facebookLogin()) }}>
	                                <span className="fa fa-facebook"></span> Link to facebook
	                            </span>
                      			<button id="login" className="btn btn-default dropdown-toggle pull-right" type="submit" onClick={()=>{
			                                    dispatch(unlinkAccount())}}>UnLink Account
			                    </button> 
			                </div>
	                   }
				       

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