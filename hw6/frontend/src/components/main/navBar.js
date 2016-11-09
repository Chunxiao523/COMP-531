import React from 'react'
import { connect } from 'react-redux'
import {changeheadline, userlogout, navprofile} from '../../action.js'
//the navigation bar in main page
export const NavBar =({dispatch, avatar, username, headline}) => {
        return (
        	<div className="navbar">
	            <img width="100%" id="navIcon"  
	        		src={avatar}/>
                    {username} | 
	        	<span id="status">Status: {headline}</span>    
	        	<input type="text" id="newText" ref = {(node) => headline = node}/>  
            	<button type="button" id="statusBtn" onClick={() => {dispatch(changeheadline(headline.value)) }} 
                    className="btn btn-default btn-sm">Update</button>
                 <a id="profilepage" href="#" onClick={() => { dispatch(navprofile()) }}>Profile</a>
            	 <a id="logout" href="#" onClick={() => { dispatch(userlogout()) }}>Logout</a>
        	</div>
   			 );
}

export default connect(
    (state) => {
        return {
            avatar: state.profile.avatar,
            username: state.profile.username,
            headline: state.profile.headline
        }
    }
)(NavBar)