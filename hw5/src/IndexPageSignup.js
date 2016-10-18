import React from 'react';

export default class IndexPageSignup extends React.Component {

	signup() {
		return (
			<div className="signupForm">
		        <div className="eleItem">
		            <label>Account Name: &nbsp;</label>
		            <input type="text"  onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Display Name: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Email address: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Phone number: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Date of birth: &nbsp;</label>
		           	<input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Zip code: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Password: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="eleItem">
		            <label>Password confirmation: &nbsp;</label>
		            <input type="text" onChange={this.handleChange} />
		        </div>
		        <div className="btnItem">
		            <input type="submit" value="Submit" onClick={this.handleClick} />
		            &nbsp;
		       		<input type="reset" value="Clear" onClick={this.handleClick} />
		        </div>
		    </div>
		);
	}


  render() {
    return (
        <div className="signup">
          Signup.
          {this.signup()}
        </div>
        );
  }
}