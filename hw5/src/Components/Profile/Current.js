import React from 'react';
export default class Current extends React.Component {
 render() {
        return (
        <div class="col-md-4">
				<h3><p>Current Information</p></h3>	
				<div>
					<img class="profile_icon" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjl6-mUQe6PN17lBz6AGLG4BwfNVx62zvSsBzU5HKhRS9TfZPz" alt="Avatar" />
				</div>
				<div class="update_button" > 
                    <input type="file" class="btn btn-default btn-sm"/>                  
                </div>
                <div class="current_profile">
			       	<table class="table-hover">
							
							<tr>
								<td class="col-md-6">Display name: </td>
								<td><p id="curname">Chunxiao</p></td>
							</tr>
							<tr>
								<td class="col-md-6">E-mail address: </td>
								<td><p id="curaddress">cz31@rice.edu</p></td>
							</tr>
							<tr>
								<td class="col-md-6">Phone number: </td>
								<td><p id="curphone">12812364270</p></td>
							</tr>
							<tr>
								<td class="col-md-6">Date of Birth: </td>
								<td><p id="curpw">23-05-1994</p></td>
							</tr>
							<tr>
								<td class="col-md-6">Zip code: </td>
								<td><p id="curzip">77005</p></td>		
							</tr>
						</table>
			    </div>
			
        </div>
        	);
    }
}