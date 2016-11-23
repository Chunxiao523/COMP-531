import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {changeheadline, userlogout, navmain} from '../../action.js'
//navigation bar in the profile page
export const NavBar =({dispatch, username, avatar, headline}) => {
        return (
        	<ul className="nav nav-tabs">
                <li role="presentation" className="col-md-1">
    	            <img className="img-responsive" id="navIcon"  
    	        		src={avatar}
    	        		alt="Avatar"/>
                </li>
                <li role="presentation"> {username} | Status: {headline} <br/><br/></li>    
	        	<li role="presentation">
                    <div className="form-group">
                        <input type="text" id="newText" ref = {(node) => headline = node}/>  
                	    <button type="button" id="statusBtn" className="btn btn-default btn-sm" 
                            onClick={() => {dispatch(changeheadline(headline.value)) }}>Update</button>
                    </div>
                </li>
                <li role="presentation"><a href="#" onClick={() => { dispatch(navmain()) }}>Home</a></li>
            	<li role="presentation"><a href="#" onClick={() => { dispatch(userlogout()) }}>Logout</a></li>
            </ul>
   			 );
}

export default connect(
    (state) => {
        return {
         username: state.profile.username,
         avatar: state.profile.avatar,
         headline: state.profile.headline
        }
    }
)(NavBar)