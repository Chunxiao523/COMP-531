import React from 'react';
export default class SignUp extends React.Component {
render() {
  const _clear = () => {
        name.value = ''
        disname.value = ''
    }
      return (
            <div class="register col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <table class="table-hover">
                      <tr>
                        <td colspan="2"><h4>New user? Register an account here!</h4></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Account Name: </p></td> 
                        <td><input type="text" name="name"/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Display Name: </p></td>
                        <td><input type="text" name="disname" /></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>E-mail Address: </p></td>
                        <td><input type="email" name="email"/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Phone Number: </p></td>
                        <td><input type="tel" name="phone" /></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Date of birth: </p></td>
                        <td><input type="date" name="birthday"/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Zipcode: </p></td>
                        <td><input type="number" name="zipcode"/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Password: </p></td>
                        <td><input type="password" name="pw"/></td>
                      </tr>
                      <tr>
                        <td class="col-md-6"><p>Password Confirmation: </p></td>
                        <td><input type="password" name="pwconfirm"/></td>
                      </tr>
                      <tr>
                        <td colSpan="2"><p>
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Clear" onClick={_clear} /></p></td>
                      </tr>
                </table>
  </div>
  );
  }
}