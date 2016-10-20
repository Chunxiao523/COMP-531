import React from 'react';
import Person from "./IndexPageLogin.js";
import IndexPageSignup from "./IndexPageSignup.js";

export default class IndexPageContainer extends React.Component {
  render() {
    return (
        <div className="container">
         Welcome
      	<Person/>
      	<IndexPageSignup/>
        </div>
        );
  }
}