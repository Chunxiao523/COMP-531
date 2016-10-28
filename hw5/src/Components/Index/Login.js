import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {userlogin, navmain} from '../action.js'
export const Login = ({dispatch}) => {
      let username, password
      return (
            <div class="login col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                  <table class="table-hover" >
                      <tr>
                        <td colspan="2" ><h4>Have an account? Login here </h4></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Account Name: </p></td>
                        <td><input type="text" ref = {(node) => username = node} /></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Password: </p></td>
                        <td><input type="password"  ref = {(node) => password = node} /></td>
                      </tr>
                      <tr>
                        <td co lspan="2"><p><button type="submit" onClick={()=>{
                          dispatch(userlogin(username.value, password.value), navmain())
                        }}>Login</button></p></td>
                      </tr>
                  </table>
            </div> 
          )
}

export default connect()(Login)