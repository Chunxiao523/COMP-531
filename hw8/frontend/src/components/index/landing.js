import React from 'react';
import Login from './login.js'
import SignUp from './signUp.js'
import Notification from './../notification.js'
//start page
export default class StartPage extends React.Component {
  render() {
        return (
            <div className="container">
               <h1 id="#websiteTitle" className="page-header text-center"> Welcome </h1>
                   <Notification />
                   <Login/>
                   <SignUp />
            </div>
        );
    }
}
