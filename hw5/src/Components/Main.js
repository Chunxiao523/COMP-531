import React from 'react';
import NavBar from './Main/NavBar.js'
import Card from './Main/Card.js'
import Follower from './Main/Follower.js'
import EditField from './Main/EditField.js'
export default class Main extends React.Component {
	 render() {
        return (
            <div className="main">
              <NavBar/>
              <Card/>
              <Card/>
              <Follower/>
              <EditField/>
            </div>
        );
    }
}