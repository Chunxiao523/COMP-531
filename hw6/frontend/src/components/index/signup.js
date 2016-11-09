import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import {userregister} from '../../action.js'
//sign up component in the start page
export const SignUp = ({dispatch}) => {
  let username, zipcode, email, password, pwconf
      return (
            <div className="signup col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <h2>Register a new account</h2>
                  <table className="table-hover">
                  <tbody>
                      <tr>
                        <td colSpan="2"><h4>New user? Register an account here!</h4></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Account Name: </p></td> 
                        <td><input id="username2" type="text" ref={(node) => username = node }/></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>E-mail Address: </p></td>
                        <td><input id="email" type="text" ref={(node) => email = node } /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Zipcode: </p></td>
                        <td><input id="zipcode" type="zipcode" ref={(node) => zipcode = node } /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password: </p></td>
                        <td><input id="password2" type="password" ref={(node) => password = node }/></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password Confirmation: </p></td>
                        <td><input id="pwconf" type="password" ref={(node) => pwconf = node }/></td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                             <p>
                                <button id="register" type="submit"  onClick={()=>{
                                      dispatch( userregister(username.value, email.value, zipcode.value, password.value))
                                      }}>SignUp 
                                </button>
                              </p>
                        </td>
                      </tr>
                      </tbody>
                </table>
  </div>
      )
}
export default connect() (SignUp)