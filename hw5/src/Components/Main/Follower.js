import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//follower component in main page
 export const Follower =({}) => {
 	return (
	        <div >
               <div className=" sidebar" id="follower">
                    <img id="icon" src ='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg'/>
                    <div className="follower_information" >
                        <p>"name"</p><p> Status: "headline"</p>
                    </div>
               </div>
        </div>
        );
}

export default connect()(Follower)