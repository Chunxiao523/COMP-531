import React from 'react';
export default class Follower extends React.Component {
 render() {
        return (
        <div class="col-md-4">
           <div class="sidebar">
            <div class="add">
                <p>Add a friend <input type="text"/> 
                <button type="button" class="btn btn-default btn-sm">
                	Add
                </button></p>
            </div>
            <div class="well well-sm follower">
                <div class="follower_icon">
                	<img id="icon" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAY1ZXCldVgCZWNS_t_w7l0j4PSm0drkc1tui8ttMOPwC67yAo" alt="Avatar"/></div>
                <div class="follower_information" ><p> CJ Zhang</p><p> Status: Holy yo!</p></div>
                <div class="unfollow">
                	<button type="button" class="btn btn-default btn-sm">
                		remove
                	</button>
                </div>
            </div>
            </div>
               <div class="well well-sm follower">
                <div class="follower_icon"><img id="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uXVq6BUimO2Jx8VQJrkjpsi68kILPMkWO8nX61zg4a6t_V5bBw" alt="Avatar"/></div>
                <div class="follower_information"><p> Tong Zhou</p><p> Status: I am beauty </p></div>
                <div class="unfollow"> 
                	<button type="button" class="btn btn-default btn-sm">
                		remove
                	</button> 
                </div>
            </div>
            <div class="well well-sm follower">
                <div class="follower_icon"><img id="icon" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQl2XkPZ52DF_kyoxU5rD5x8S6MmsPtcEDBfeoBjw5wSIX4lCLh" alt="Avatar"/></div>
                <div class="follower_information"><p> Fang Liu</p><p> Status: Find a job! </p></div>
                <div class="unfollow">
                	<button type="button" class="btn btn-default btn-sm">
            			remove
            		</button>
            	</div>
            </div>
        </div>
        	);
    }
}