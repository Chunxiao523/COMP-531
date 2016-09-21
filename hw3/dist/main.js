// This is the JS file for main.html
// author:Chunxiao Zhang

var statusBtn = document.getElementById("statusBtn");   //action listener to the update status button
	statusBtn.addEventListener("click", Update,false);
			function Update() {
				var newValue = document.getElementById("newText").value;

				document.getElementById("status").innerText = newValue;
			}
var Btn = document.getElementById("cancelBtn");		//action listener to the cancel button to clear the textarea
			Btn.addEventListener("click", Clear, false);

			function Clear() {
				document.getElementById("newArticle").value = "";
			}