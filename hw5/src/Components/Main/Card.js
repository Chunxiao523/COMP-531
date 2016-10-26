import React from 'react';
export default class Card extends React.Component {
 render() {
        return (
            		<div id="card"> 
	                	<div class="User_information">
		                    <div class="icon" >
		                    	<img id="icon" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjl6-mUQe6PN17lBz6AGLG4BwfNVx62zvSsBzU5HKhRS9TfZPz" alt="Avatar" />
		                    </div>
		                    <div class="information">
		                    	<p>Angel Zhang</p>
		                    	<p> Status: Enjoy Life</p>
		                    </div>
	                	</div>
            			<div id="content">
	                		<p>
	                			<img id="img" src="http://www.dayie.com/image/pic/categories/impressionist/imp_sce_fl/ISF-012.jpg" alt="Avatar" />
	                		</p>
	                		<div class="editbutton"> 
	                    		<button type="button" class="btn btn-default btn-sm">
	                        		Edit
	                    		</button>
	                    		<button type="button" class="btn btn-default btn-sm">
	                        		Comment
	                    		</button> 
	                		</div>
	                    	<div class="well well-sm">
	                    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	                    	</div>
	                    </div>
                	</div>
   			 );
    }


}