'use strict'

var createApp = function(canvas) { 
	canvas.onmousedown = function grow(e){
		 var x = e.clientX - canvas.offsetLeft;
         var y = e.clientY - canvas.offsetTop;

	}
	var c = canvas.getContext("2d");

	// Create the ground
	var floor = canvas.height/2
	var grad = c.createLinearGradient(0,floor,0,canvas.height) //no effect
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)

	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

	//build a building
	var build = function(x, y) { 
		var x0 = Math.random()*canvas.width
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)
		var blgHeight = Math.random()*canvas.height/2
		var blgColor = blgColors[ Math.floor(Math.random()*blgColors.length)]
		c.fillStyle = blgColor
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		c.fillStyle="yellow"

		var N = blgWidth / (windowWidth + windowSpacing)
		for (var y = floor - floorSpacing; y > floor - blgHeight; y -= (floorSpacing + windowHeight)) {
			for (var x =Math.random()*N * windowSpacing; x < blgWidth - windowWidth; x += (Math.floor(Math.random() * N)) * (windowSpacing + windowWidth)) {		
				c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
			}
		}
	}

	

	return {
		build: build
	}
}

window.onload = function() {
	var app = createApp(document.querySelector("canvas"))
	//var canvas = document.getElementById("canvas")
	document.getElementById("build").onclick = app.build
	//canvas.onmousedown = app.grow
}


