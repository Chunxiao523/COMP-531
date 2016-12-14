import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {userlogin, facebookLogin} from '../../action.js'
//login component in the start page
export const Login = ({dispatch}) => {
      let username, password
      return (
            <div className="login col-lg-4 col-md-4 col-sm-4 col-xs-4 col-md-offset-1">
                  <table className="table-hover" >
                  <tbody>
                      <tr>
                        <td colSpan="2" ><h3>Have an account? Login here </h3></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Account Name: </p></td>
                        <td><input id="username" className="form-control" type="text" ref = {(node) => username = node} /></td>
                      </tr>
                      <tr>
                        <td className="col-md-6"><p>Password: </p></td>
                        <td><input id="password" className="form-control" type="password"  ref = {(node) => password = node} /></td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                            <p>
                                <button id="login" className="btn btn-default dropdown-toggle pull-right" type="submit" onClick={()=>{
                                    dispatch(userlogin(username.value, password.value))}}>Login
                                </button>
                            </p>
                             <span className="btn btn-primary" onClick={() => { dispatch(facebookLogin()) }}>
                                <span className="fa fa-facebook"></span> Facebook
                            </span>
                        </td>
                      </tr>
                      </tbody>
                  </table>
               
            </div> 
          )
}

export default connect()(Login)