$(document).ready(function(){
  $("#button").click(function(){ //action listener when the update button is clicked
  	var string = "";
  	var flag = true;
  	if($("#name").val() != ""){
  		if( $("#name").val() != $("#curname").text()){ 
  			if(!/^[a-zA-Z][a-zA-Z0-9]+$/i.test($("#name").val())) {
        			alert("Account name can only be upper or lower case letters and numbers, but may not start with a number. Please input your account name again.");
    				flag = false; //validation in display name
    			}else{
  					string = "You have changed the following items: \n" + "Display name: " + $("#name").val()+"\n";
  					$("#curname").html($("#name").val());
  					$("#name").val(null);
  			}
  		}
  	}

  	if($("#address").val() != ""){
  		if($("#address").val() != $("#curaddress").text()){
  			 var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
             var test= reg.test($("#address").val()); //validation for the email address format
                if (!test) {
                    alert("Please input correct E-mail address type.");
                	flag = false;
                }else{
  					string = string + "E-mail: " + $("#address").val()+"\n";
  					$("#curaddress").html($("#address").val());
  					$("#address").val(null);
  			}
  		}
  	}

    if($("#phone").val() != ""){
		if($("#phone").val() != $("#curphone").text()){
			if(isNaN($("#phone").val())){ //validation for the phone format, validate if all of the inputs are numbers
				alert("Please input valid phone numbers");
				flag = false;
			}else{
				string = string + "Phone: " + $("#address").val()+"\n";
				$("#curphone").html($("#phone").val());
  				$("#phone").val(null);
			}
		}
	}

	if($("#zip").val() != ""){
		if($("#zip").val() != $("#curzip").text()){
			if(isNaN($("#zip").val())){ //validation for the zip numbers,validate if all of the inputs are numbers
				alert("Please input valid zip numbers.");
				flag = false;
			}else{
				string = string + "Zip: " + $("#zip").val()+"\n";
				$("#curzip").html($("#zip").val());
  				$("#zip").val(null);
			}
		}
	}

	if($("#pw").val() != ""){
		if($("#pwconfirmed").val() == ""){
			alert("Please confirm your password."); //validate if the password field and password confirmed field are input at the same time
			flag = false;
		}
	}

	if($("#pwconfirmed").val() != ""){
		if($("#pw").val() == ""){
			alert("Please input your password first."); //validate if the password field and password confirmed field are input at the same time
			flag = false;
		}else if($("#pw").val() != $("#pwconfirmed").val()){
			window.alert("Please confirm your password"); //validate if the two fields of passwords are the same
			flag = false;
		}else { //password and confirmed password are matched
			if($("#pw").val() == $("#pwconfirmed").val()){
				string = string + "Password: " + $("#pw").val()+"\n";
				$("#curpw").html($("#pw").val());
  				$("#pw").val(null);
			
				string = string + "Confirmed Password: " + $("#pwconfirmed").val()+"\n";
				$("#curpwconfirmed").html($("#pwconfirmed").val());
  				$("#pwconfirmed").val(null);	
			}
		}
	}
		if(flag){
			if(string == ""){
				alert("There is no change on your file.");
			}else{
  				alert(string); // print the result of changing.
  		}
  	}
  });
 
});
