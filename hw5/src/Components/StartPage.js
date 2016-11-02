import React from 'react';
import Login from './Index/Login.js'
import SignUp from './Index/SignUp.js'

//start page
export default class StartPage extends React.Component {
  render() {
        return (
            <div className="container">
               <h1 id="#websiteTitle"> Welcome </h1>
               <Login />
               <SignUp />
            </div>
        );
    }
}
