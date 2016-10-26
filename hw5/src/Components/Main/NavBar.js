import React from 'react';
export default class NavBar extends React.Component {
	 render() {
        return (
        	<div class="navbar">
	            <img id="navIcon"  
	        		src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjl6-mUQe6PN17lBz6AGLG4BwfNVx62zvSsBzU5HKhRS9TfZPz" 
	        		alt="Avatar"/>Angel Zhang | 
	        	<span id="status">Status: Enjoy life</span>    
	        	<input type="text" id="newText"/>  
            	<button type="button" id="statusBtn" class="btn btn-default btn-sm">Update</button>
            	Profile  Logout
        	</div>
   			 );
    }
}