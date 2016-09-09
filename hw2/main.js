var imgList = [null,null,null];
function changing(id){
	if(imgList[id]==null){
		var imgs = document.getElementsByTagName("img");
		var imgGa = ["img_avatar.png", "sea-01.jpg", "img_avatar2.jpg"];//array used to store image sources
		var index = 0;
		imgList[id] = setInterval(function(){
			imgs[id].src = imgGa[index++ % imgGa.length];

		}, 1000*Math.floor(Math.random()*5) + 1);
	}
}
var Btn = document.getElementById("button");
			Btn.addEventListener("click", MouseClick, false);

			function MouseClick() {
				if(flag == true){
					
					clearInterval(imgList[0]);
					Btn.innerText = "Start";	
					flag = false;
				} else if (flag == false) {
					
					imgList[0] = setInterval(function(){
			imgs[0].src = imgGa[index++ % imgGa.length];

		}, 1000*Math.floor(Math.random()*5) + 1);
					Btn.innerText = "Stop";
					flag = true;
				}
			}


window.onload=function(){
	for(var i = 0; i < 3; i++){
		changing(i);
	}
}