import React from 'react';
export default class Follower extends React.Component {
 render() {
        return (
        <div class="col-md-4">
           <div id="sidebar">
               <div class="add">
                    <p>Add a friend <input type="text"/> 
                    <button type="button" class="btn btn-default btn-sm">
                    	Add
                    </button></p>
               </div>
               <div class="well well-sm" id="follower">
                    <img id="icon" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAY1ZXCldVgCZWNS_t_w7l0j4PSm0drkc1tui8ttMOPwC67yAo" alt="Avatar"/>
                    <div class="follower_information" >
                        <p> CJ Zhang</p><p> Status: Holy yo!</p>
                    </div>
                    <div class="unfollow">
                    	<button type="button" class="btn btn-default btn-sm">
                    		remove
                    	</button>
                    </div>
               </div>
             
                </div>
        </div>
        	);
    }
}