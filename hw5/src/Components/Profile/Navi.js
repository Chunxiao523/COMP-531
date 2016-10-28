import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {navlanding, navmain} from '../action.js'
export const NavBar =({dispatch}) => {
        return (
        	<div class="navbar">
	            <img id="navIcon"  
	        		src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjl6-mUQe6PN17lBz6AGLG4BwfNVx62zvSsBzU5HKhRS9TfZPz" 
	        		alt="Avatar"/>Angel Zhang | 
	        	<span id="status">Status: Enjoy life</span>    
	        	<input type="text" id="newText"/>  
            	<button type="button" id="statusBtn" class="btn btn-default btn-sm">Update</button>
                 <a href="#" onClick={() => { dispatch(navmain()) }}>Home</a>
            	 <a href="#" onClick={() => { dispatch(navlanding()) }}>Logout</a>
        	</div>
   			 );
}

export default connect()(NavBar)