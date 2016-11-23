import React from 'react'
import { connect } from 'react-redux'
import {changeheadline, userlogout, navprofile} from '../../action.js'
//the navigation bar in main page
export const NavBar =({dispatch, avatar, username, headline}) => {
        return (
        	<ul className="nav nav-tabs form-horizontal" role="tablist">
          
                <li role="presentation" className="col-md-1">
    	            <img className="img-responsive" alt="Responsive image" id="navIcon"  
    	        		src={avatar}/>
                </li>
                 
                <li role="presentation"><h4>{username} | Status: {headline} <br/><br/></h4></li>
	        	<li role="presentation"><a id="profilepage" href="#" onClick={() => { dispatch(navprofile()) }}>Profile</a></li>
                 <li role="presentation"><a id="logout" href="#" onClick={() => { dispatch(userlogout()) }}>Logout</a></li>
                         <div className="input-group col-md-3">
                            <input type="text" className="form-control " ref = {(node) => headline = node}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" onClick={() => {dispatch(changeheadline(headline.value)) }}>Update</button>
                            </div>
                        </div>    
            </ul>
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
