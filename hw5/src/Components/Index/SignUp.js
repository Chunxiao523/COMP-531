import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'

import {register, navmain} from '../action.js'
class SignUp extends Component {
  componentDidUpdate() {
        if (this.props.error.length == 0) {
            this.email.value = null
            this.zipcode.value = null
            this.password.value = null
            this.pwconf.value = null
        }
    }
render() {
      return (
            <div class="register col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <h2>Register a new account</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const payload = {
                        username:this.username.value,
                        email:this.email.value,
                        zipcode:this.zipcode.value,
                        password:this.password.value,
                        pwconf:this.pwconf.value
                    }
                    this.props.dispatch(navmain(),register(payload))
                }}>
                  <table class="table-hover">
                      <tr>
                        <td colspan="2"><h4>New user? Register an account here!</h4></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Account Name: </p></td> 
                        <td><input id="username" type="text" ref={(node) => this.username = node }/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>E-mail Address: </p></td>
                        <td><input id="email" type="text" ref={(node) => this.email = node } /></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Zipcode: </p></td>
                        <td><input id="zipcode" type="zipcode" ref={(node) => this.zipcode = node } /></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Password: </p></td>
                        <td><input id="password" type="password" ref={(node) => this.password = node }/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Password Confirmation: </p></td>
                        <td><input id="pwconf" type="password" ref={(node) => this.pwconf = node }/></td>
                      </tr>
                      <tr>
                        <td colSpan="2"><p>
                            <input type="submit" value="Submit"/></p>
                        </td>
                      </tr>
                </table>
          </form>
  </div>
  )}
}
export default connect() (SignUp)