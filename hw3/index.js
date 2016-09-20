<script>
		function doSomething(){

			document.getElementsByName("timestamp")[0].value=Date.now();
			var name = document.getElementsByName("name")[0].value;
			var email = document.getElementsByName("email")[0].value;
			var phone = document.getElementsByName("phone")[0].value;
			var zipcode = document.getElementsByName("zipcode")[0].value;
			var pw1 = document.getElementsByName("pw")[0].value;
			var pw2 = document.getElementsByName("pwconfirm")[0].value;
			var startdate = document.getElementsByName("birthday")[0].value;
			var birthday=new Date(startdate.replace(/-/g, "\/"));   
			var d=new Date();   
			var age = d.getFullYear()-birthday.getFullYear()-((d.getMonth()<birthday.getMonth()|| d.getMonth()==birthday.getMonth() && d.getDate()<birthday.getDate())?1:0);  

			if(!/^[a-zA-Z][a-zA-Z0-9]+$/i.test(name)) {
        		alert("Account name can only be upper or lower case letters and numbers, but may not start with a number. Please input your account name again.");
        		return false;
    		}

    		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i.test(email)) {
        		alert("Please input a valid email address, such as a@b.co.");
        		return false;
    		}

    		if(!/^[0-9]+$/i.test(phone)) {
        		alert("Phone number can only be numbers. Please input your phone number again.");
        		return false;
    		}

    		if(zipcode.length!=5){
    			alert("Length of zipcode should be five numbers.");
        		return false;
    		}

			if(age<18){
				alert("you cannot register since you are under 18");
				return false;
			}
			if(pw1!=pw2){
				window.alert("Please confirm your password");
				return false;
			}else{
				submit();
			}
		}
	</script> 