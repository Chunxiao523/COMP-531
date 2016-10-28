import React from 'react';
import Current from './Profile/Current.js'
import EditProfile from './Profile/EditProfile.js'
import Navi from './Profile/Navi.js'
export default class Profile extends React.Component {
	 render() {
        return (
            <div className="main">
              <Navi />
              <Current/>
              <EditProfile/>
            </div>
        );
    }
}