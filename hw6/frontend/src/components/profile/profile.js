import React from 'react';
import Current from './current.js'
import EditProfile from './editProfile.js'
import Navi from './navi.js'
import Notification from '../notification.js'
import Avatar from './avatar.js'
//profile page
export default class Profile extends React.Component {
	 render() {
        return (
            <div className="main">
              <Navi />
              <Avatar />
              <Current />
              <EditProfile />
              <Notification />
            </div>
        );
    }
}