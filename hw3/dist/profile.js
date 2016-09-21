// This is the JS file for profile.html
// author:Chunxiao Zhang

var btn = document.getElementById("updateInformation");
	btn.addEventListener("click", Update, false);

  function Update() {  //Update function in the profile page, which validates the input value and update
		if($("#name").val() != ""){ //validate the value of displayname
  		if( $("#name").val() != $("#curname").text()){ 
  			if(!/^[a-zA-Z][a-zA-Z0-9]+$/i.test($("#name").val())) {
    				flag = false; //validation in display name
    			}else{
  					string = "You have changed the following items: \n" + "Display name: " + $("#name").val()+"\n";
  					$("#curname").html($("#name").val());
  					$("#name").val(null);
  			}
  		}
  	}
  	if($("#address").val() != ""){ //validate the value of email address
  		if($("#address").val() != $("#curaddress").text()){
  			 var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
             var test= reg.test($("#address").val()); //validation for the email address format
                if (!test) {                  
                	flag = false;
                }else{
  					string = string + "E-mail: " + $("#address").val()+"\n";
  					$("#curaddress").html($("#address").val());
  					$("#address").val(null);
  			}
  		}
  	}
 if($("#phone").val() != ""){ //validate the value of phone number
		if($("#phone").val() != $("#curphone").text()){
			if(isNaN($("#phone").val())){ //validation for the phone format, validate if all of the inputs are numbers
				flag = false;
			}else{
				string = string + "Phone: " + $("#address").val()+"\n";
				$("#curphone").html($("#phone").val());
  				$("#phone").val(null);
			}
		}
	}

	if($("#zip").val() != ""){ //validate the value of zip code
		if($("#zip").val() != $("#curzip").text()){
			if(isNaN($("#zip").val())){ //validation for the zip numbers,validate if all of the inputs are numbers
				flag = false;
			}else{
				string = string + "Zip: " + $("#zip").val()+"\n";
				$("#curzip").html($("#zip").val());
  				$("#zip").val(null);
			}
		}
	}
}









