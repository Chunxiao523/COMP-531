'use strict'
PIXI.Sprite.prototype.originX=0;
PIXI.Sprite.prototype.originY=0;
PIXI.Sprite.prototype.positionArr=[];
PIXI.Sprite.prototype.drift=[];
PIXI.Sprite.prototype.color="";
var stage = new PIXI.Container();
var bunny;
var fieldX = 400;
var fieldY = 400;
var screenData={};
var R;
var longerSide;
var coverPiece=[];
var fieldArr = []
var padding=5;
var backgroundColor = 0x4D4D4B;
var level=[0,1,2,3,4];
var color=["0x898CFF","0x71E096","0xF5A26F","0xFFDC89","0xFF89B5"];
$(function() {
	screenData=screenAdjustment();
	var renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
	$("body").append(renderer.view);
	stage.interactive = true;
	stage.DrawField();
	stage.CreatePiece(screenData.screenX * 0.7, screenData.screenY * 0.5, R);
	 requestAnimationFrame(animate);
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
});

PIXI.Container.prototype.CreatePiece=function(x, y,R) {
	var textureObj=DrawPiece();

	bunny = new PIXI.Sprite(textureObj.texture);
	 // enable the bunnys to be interactive... this will allow it to respond to mouse and touch events
    bunny.interactive = true;
    // this button mode will mean the hand cursor appears when you roll over the bunnys with your mouse
    bunny.buttonMode = true;
    // center the bunnys's anchor point
    bunny.anchor.set(0.5,1);
    // setup events
    bunny.scale.set(0.7);
     bunny
    //     //event for rotate
    //     // .on('click', itemRotate)
    //     // // events for drag start
          .on('mousedown', onDragStart)
          .on('touchstart', onDragStart)

    //     // // events for drag end
         .on('mouseup', onDragEnd)
         .on('mouseupoutside', onDragEnd)
         .on('touchend', onDragEnd)
         .on('touchendoutside', onDragEnd)
    //        // // events for drag move
         .on('mousemove', onDragMove)
         .on('touchmove', onDragMove);
       
    // move the sprite to its designated position
    bunny.position.x = x;
    bunny.position.y = y;
    bunny.originX=x;
    bunny.originY=y;
    bunny.pieceArr=textureObj.pieceArr;
    bunny.drift=textureObj.drift;
    //bunny.color=textureObj.color;
	this.addChild(bunny);
}
function onDragStart(event) {
	this.data = event.data;
	this.alpha = 0.5;
	this.dragging = true;
	this.scale.set(1);
}
function onDragMove() {
	if(this.dragging) {
		var newPosition = this.data.getLocalPosition(this.parent);
		this.position.x = newPosition.x;
		this.position.y = newPosition.y;
	}
}
function onDragEnd() {
	this.dragging = false;
	this.alpha = 1;
	this.data = null;
	setPiece();
}

function cover() {
	this.coverX
}

function setPiece() {
	var coverX=[],coverY=[],coverColor=[],coverIndex=[];
	var canSet = bunny.pieceArr.every(function(value, level) {
		var positionX= bunny.position.x+bunny.drift[0]*bunny.width+bunny.drift[1]+value[0];
        var positionY= bunny.position.y+bunny.drift[2]*bunny.height+bunny.drift[3]+value[1];
		return fieldArr.some(function(v,i){
			if(((fieldX+v[0]-positionX)*(fieldX+v[0]-positionX) + (fieldY+v[1]-positionY)*(fieldY+v[1]-positionY)) <= 300 && v[2] ==false) {
					coverX[i]=fieldX+v[0];
                    coverY[i]=fieldY+v[1];
                    coverColor[i]=bunny.pieceArr[level][2];
                    coverIndex[i]=i;
                    return true;
			} else {
				return false;
			}

	});
});
	if(!canSet) {
		bunny.position.x = bunny.originX;
		bunny.position.y = bunny.originY;
		bunny.scale.set(0.7);

	}else {
		setScore();
		coverIndex.forEach(function(v,i){
            fieldArr[v][2]=true;
            coverPiece[v]=new PIXI.Graphics();
            coverPiece[v].DrawHexagon(coverX[i],coverY[i],coverColor[i]);
            stage.addChild(coverPiece[v]);
        });
        judge(fieldArr,coverIndex, coverX, coverY);
	}
	 stage.removeChild(bunny);
     stage.CreatePiece(bunny.originX,bunny.originY,R);
}
function setScore() {

}

function DrawPiece() {
	var piece = new PIXI.Graphics();
	var random = Math.round(Math.random()*3);
	var pieceArr=[];
	var drift;
	switch(random){
        case 0:
        	pieceArr.push([0, 0,color[level[Math.round(Math.random()*4)]]]);  //horizontal
        	pieceArr.push([2*longerSide+padding, 0, color[level[Math.round(Math.random()*4)]] ]);
        	drift=[-0.5,longerSide,0,-longerSide]; 
            break;
        case 1:
        	pieceArr.push([0, 0, color[level[Math.round(Math.random()*4)]]]);  //right bottom
            pieceArr.push([longerSide, 3*R/2 + padding, color[level[Math.round(Math.random()*4)]] ]); 
            drift=[-0.5,longerSide,-1,longerSide];
            break;
        case 2:
        	pieceArr.push([0, 0, color[level[Math.round(Math.random()*4)]]]); //right top
        	pieceArr.push([longerSide+padding, -3*R/2 - padding, color[level[Math.round(Math.random()*4)]] ]); 
        	drift=[-0.5,longerSide,0,-longerSide];
            break;
        default:
            pieceArr.push([0, 0, color[level[Math.round(Math.random()*4)]] ]); //single one
            drift=[-0.5,longerSide,0,-longerSide];
            break;
    }
      pieceArr.forEach(function(value){  
        	piece.DrawHexagon(fieldX+value[0],fieldY+value[1],value[2]);
        	return value.slice(0,2);
      });
    return {"texture":piece.generateTexture(10),"pieceArr":pieceArr,"drift":drift};
}

PIXI.Container.prototype.DrawField=function () {
	function pushCenterPoints(x, y, index) {
		for (var i = 0; i < index; i ++) {
			fieldArr.push([x+i*(2*longerSide+padding), y, false, backgroundColor ]); 
		}
	}
	var graphics =new PIXI.Graphics();
	pushCenterPoints(0,0,9);
	for (var i = 4; i <= 8; i ++) {
		pushCenterPoints(i*(longerSide+padding /2), -i*(3*R/2+padding), i + 1);
		pushCenterPoints(i*(longerSide+padding/2), i*(3*R/2+padding), 9-i)
	}
	fieldArr.forEach(function(value) {
		graphics.DrawHexagon(fieldX+value[0], fieldY+value[1],value[3]);
	});
	this.addChild(graphics);
}



PIXI.Graphics.prototype.DrawHexagon=function(x,y,color) {
	this.lineStyle(0);
    this.beginFill(color);
    this.moveTo(x,y-R);
    this.lineTo(x+longerSide, y-R/2);
    this.lineTo(x+longerSide, y+R/2);
    this.lineTo(x,y+R);
    this.lineTo(x-longerSide, y+R/2);
    this.lineTo(x-longerSide, y-R/2);
    this.moveTo(x,y-R);
    this.endFill();
}
//Adjust the screen
function screenAdjustment(){
    var screenX=$(window).width();
    var screenY=$(window).height();
    if(screenY<=screenX) {
        fieldX = screenX / 8;
        fieldY = screenY / 2;
        R = screenX / 40;
        longerSide = R * 1.73 / 2;
        return {"screenX": screenX, "screenY": screenY,"type":0};
    }else{
        fieldX = screenX / 10;
        fieldY = screenY / 2.5;
        R = screenX / 20;
        longerSide = R * 1.73 / 2;
        return {"screenX": screenX, "screenY": screenY,"type":1};
    }
}