import React from 'react';
export default class EditProfile extends React.Component {
 render() {
        return (
        <div class="col-md-6">
        	<div class="update_profile">
	           <table class="table-hover">
						<tr>
							<td colspan="2"><h3><p>Change profile value</p></h3></td>
	  						<td></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>Display name: </p></td>
	  						<td class="col-md-3"><input type="text" id="name"/></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>E-mail address: </p></td>
	  						<td class="col-md-3"><input type="text" id="address"/></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>Phone number: </p></td>
	 						<td class="col-md-3"><input type="text" id="phone"/></td>
						</tr>
						<tr>
							<td class="col-md-3"><p>Zip code: </p></td>
	  						<td class="col-md-3"><input type="text" id="zip"/></td> 			
						</tr>
						<tr>
							<td colspan="2" >
								<div class="update_button"> 
		                    		<button type="button" id="updateInformation" class="btn btn-default btn-sm">
		                            	<span class="glyphicon glyphicon-saved" aria-hidden="true"></span>
		                            	Update
		                    		</button> 
		                 		</div>
	                 		</td>
						</tr>
					</table>
				</div>
        </div>
        	);
    }
}