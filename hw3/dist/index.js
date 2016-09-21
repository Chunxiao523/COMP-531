// This is the JS file for index.html
// author:Chunxiao Zhang

		function doSomething(){ //Register validate and navigate function
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
        		popover("Account name can only be upper or lower case letters and numbers, but may not start with a number. Please input your account name again.");
        		return false;
    		}

    		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/i.test(email)) {
        		popover("Please input a valid email address, such as a@b.co.");
        		return false;
    		}

    		if(!/^[0-9]+$/i.test(phone)) {
        		popover("Phone number can only be numbers. Please input your phone number again.");
        		return false;
    		}

    		if(age<18){
				popover("you cannot register since you are under 18");
				return false;
			}

    		if(zipcode.length!=5){
    			popover("Length of zipcode should be five numbers.");
        		return false;
    		}

			if(pw1!=pw2){
				popover("Please confirm your password");
				return false;
			}else{
				submit();
			}
		}

		function logIn() { //Login validate and navigate function 
			var name = document.getElementsByName("nameLogin")[0].value;
			var pw = document.getElementsByName("pwLogin")[0].value;
			if (name.length == 0) {
				popover("Please input your account name");
			}
			if (pw == "") {
				popover("Please input your password");
			} else {
				 window.location.href='main.html';
			}

		}

