import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {userlogin} from '../../action.js'
//login component in the start page
export const Login = ({dispatch}) => {
      let username, password
      return (
            <div className="login col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                  <table className="table-hover" >
                  <tbody>
                      <tr>
                        <td colSpan="2" ><h4>Have an account? Login here </h4></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Account Name: </p></td>
                        <td><input id="username" type="text" ref = {(node) => username = node} /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password: </p></td>
                        <td><input id="password" type="password"  ref = {(node) => password = node} /></td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                            <p>
                                <button id="login" type="submit" onClick={()=>{
                                    dispatch( userlogin(username.value, password.value))}}>Login
                                </button>
                            </p>
                        </td>
                      </tr>
                      </tbody>
                  </table>
               
            </div> 
          )
}

export default connect()(Login)