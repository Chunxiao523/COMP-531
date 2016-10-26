import React from 'react';
import Current from './Profile/Current.js'
import EditProfile from './Profile/EditProfile.js'

export default class Profile extends React.Component {
	 render() {
        return (
            <div className="main">
              <Current/>
              <EditProfile/>
            </div>
        );
    }
}