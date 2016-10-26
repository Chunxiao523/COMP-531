import React from 'react';
import Login from './Index/Login.js'
import SignUp from './Index/SignUp.js'
export default class StartPage extends React.Component {
  render() {
        return (
            <div class="container">
               <h1 id="#websiteTitle"> Welcome </h1>
               <Login className="login"/>
               <SignUp className="signup"/>
            </div>
        );
    }
}
