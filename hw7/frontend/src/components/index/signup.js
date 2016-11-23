import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import {userregister} from '../../action.js'
//sign up component in the start page
export const SignUp = ({dispatch}) => {
  let username, zipcode, email, bob, password, pwconf
      return (
            <div className="signup col-lg-4 col-md-4 col-sm-4 col-xs-4 form-horizontal" role="form">
                <h3>Register a new account</h3>
                  <table className="table-hover">
                  <tbody>
                      <tr>
                        <td className="col-md-6"><p>Account Name: </p></td> 
                        <td><input id="username2" className="form-control" type="text" ref={(node) => username = node }/></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>E-mail Address: </p></td>
                        <td><input id="email" className="form-control" type="text" ref={(node) => email = node } /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Zipcode: </p></td>
                        <td><input id="zipcode" className="form-control" type="zipcode" ref={(node) => zipcode = node } /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Birthday: </p></td>
                        <td><input id="bob" className="form-control" type="date" ref={(node) => bob = node } /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password: </p></td>
                        <td><input id="password2" className="form-control" type="password" ref={(node) => password = node }/></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password Confirmation: </p></td>
                        <td><input id="pwconf" className="form-control" type="password" ref={(node) => pwconf = node }/></td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                             <p>
                                <button id="register" className="btn btn-default dropdown-toggle pull-right" type="submit"  onClick={()=>{
                                      dispatch(userregister(username.value, email.value, zipcode.value,bob.value, password.value))
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