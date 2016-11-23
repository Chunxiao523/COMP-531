import React from 'react';
import { connect } from 'react-redux'
import { updateprofile } from './profileAction.js'
//field to edit user information
export const EditProfile = ({dispatch}) => {
	let username, headline, avatar, email, zipcode, pw, pwconf
        return (
        <div className="col-md-4 card card-block">
        	<h2>
             	Update Info
            </h2>
            <div className="form-group row">
              <label className="control-label col-sm-5" >Display Name:</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="name" ref = {(node) => username = node}  />
                <br/>
              </div>
            </div>
            <div className="form-group row">
              <label className="control-label col-sm-5" >E-mail address:</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="address" ref = {(node) => email = node} />
                <br/>
              </div>
            </div>
            <div className="form-group row">
              <label className="control-label col-sm-5" >Zip code: </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="zip" ref = {(node) => zipcode = node} />
                <br/>
              </div>
            </div>
            <div className="form-group row">
              <label className="control-label col-sm-5" >Password: </label>
              <div className="col-sm-7">
                <input type="password" className="form-control" id="password" ref = {(node) => pw = node} />
                <br/>
              </div>
            </div>
            <div className="form-group row">
              <label className="control-label col-sm-5" >Password Confirmed: </label>
              <div className="col-sm-7">
                <input type="password" className="form-control" id="pwconf" ref = {(node) => pwconf = node} />
                <br/>
              </div>
            </div>
            <button type="button" id="updateInformation" className="btn btn-default dropdown-toggle pull-right" onClick={()=>{
                     				dispatch(updateprofile( email.value, zipcode.value, pw.value, pwconf.value))}}>
	                            	Update
	        </button>  
        </div>
    )
}

export default connect()(EditProfile)