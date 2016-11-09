import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {changeheadline, userlogout, navmain} from '../../action.js'
//navigation bar in the profile page
export const NavBar =({dispatch, username, avatar, headline}) => {
        return (
        	<div class="navbar">
	            <img id="navIcon"  
	        		src={avatar}
	        		alt="Avatar"/>{username} | 
	        	<span id="status">Status: {headline}</span>    
	        	<input type="text" id="newText" ref = {(node) => headline = node}/>  
            	<button type="button" id="statusBtn" className="btn btn-default btn-sm" 
                onClick={() => {dispatch(changeheadline(headline.value)) }}>Update</button>
                 <a href="#" onClick={() => { dispatch(navmain()) }}>Home</a>
            	 <a href="#" onClick={() => { dispatch(userlogout()) }}>Logout</a>
        	</div>
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