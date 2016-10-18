import React from 'react';
import IndexPageLogin from "./IndexPageLogin.js";
import IndexPageSignup from "./IndexPageSignup.js";

export default class IndexPageContainer extends React.Component {
  render() {
    return (
        <div className="container">
         Welcome
         <IndexPageLogin/>
         <IndexPageSignup/>
        </div>
        );
  }
}