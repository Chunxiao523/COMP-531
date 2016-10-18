import React from 'react';
import MainPageContainer from "MainPageContainer.js"
export default class IndexPageLogin extends React.Component {
 getLogin() {
	 return (
			<div className="loginForm">
              <div className="eleItem">
                <label>User Nmae: &nbsp;</label>
                <input type="text"  onChange={this.handleChange} />
              </div>
              <div className="eleItem">
                <label>Password：</label>
                <input type="text" onChange={this.handleChange} />
              </div>
              <div className="btnItem">
                  <input type="submit" value="Submit" onClick={this.handleClick} />
              </div>
      		</div>
	     );
	}
	var handleClick = function() {
		render(
			<MainPageContainer/>, document.getElementById('app')
		);
  	},

  render() {
    return (
        <div className="login">
          Login.
         {this.getLogin()}
        </div>
        );
  }
}