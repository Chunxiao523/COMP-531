'use strict'
PIXI.Sprite.prototype.originX=0;
PIXI.Sprite.prototype.originY=0;
PIXI.Sprite.prototype.positionArr=[];
PIXI.Sprite.prototype.drift=[];
PIXI.Sprite.prototype.color="";
var stage=new PIXI.Container();
var colorArr=["0x898CFF","0x71E096","0xF5A26F","0xFFDC89","0xFF89B5"];
var fieldX=400;
var fieldY=400;
var R=40;
var padding=5;
var longerSide;
var coverPiece=[];
var bunny;
var gameJudge=[true,true,true];
var screenData={};
var store=null;
var score=0;
var fieldArr=[];

$(function(){
    screenData=screenAdjustment();
   // setBestScore(0);
    var renderer=PIXI.autoDetectRenderer($(window).width(),$(window).height());
    $("body").append(renderer.view);
    stage.interactive=true;
    stage.DrawField(fieldX,fieldY,R,padding,0x4D4D4B);
    stage.CreatePiece(screenData.screenX * 0.7, screenData.screenY * 0.5, R);
    requestAnimationFrame(animate);
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
});

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

//Draw the hexagon field on the screen
PIXI.Container.prototype.DrawField=function(x,y,R,padding,backgroundColor){
    function pushCenterPoint(x,y,i){
        for(var j=0;j<i;j++){
            fieldArr.push([x+(longerSide*2+padding)*j,y,false]);
        }
    };
    var graphics=new PIXI.Graphics();
    pushCenterPoint(0,0,9);
    for(var i=1;i<=4;i++) {
        pushCenterPoint(i*(longerSide+padding/2),-i*((R*3/2+padding)),9-i);
        pushCenterPoint(i*(longerSide+padding/2),i*((R*3/2+padding)),9-i);
    }
    fieldArr.forEach(function(value){
        graphics.DrawHexagonal(x+value[0],y+value[1],R,backgroundColor);
    });
   this.addChild(graphics);
};

//生成碎片对象
PIXI.Container.prototype.CreatePiece=function(x, y,R){
    var textureObj=DrawPiece(x,y,R);
    // create a new Sprite using the texture
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
        //event for rotate
        // .on('click', itemRotate)
        // // events for drag start
         .on('mousedown', onDragStart)
         .on('touchstart', onDragStart)

        // // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
           // // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
       
    // move the sprite to its designated position
    bunny.position.x = x;
    bunny.position.y = y;
    bunny.originX=x;
    bunny.originY=y;
    bunny.positionArr=textureObj.positionArr;
    bunny.drift=textureObj.drift;
    bunny.color=textureObj.color;
    // add it to the stage
    this.addChild(bunny);

};
function onDragStart(event){
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.scale.set(1);
}

function onDragEnd(){
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    setPiece(this);
    // judgeGame();
}

function setPiece() {
    this.data.getLocalPosition(this.parent);
}

function onDragMove(){
    if (this.dragging){
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x =newPosition.x;
        this.position.y =newPosition.y;
    }
};

//判断拖动的碎片是否能在当前位置放下
function setPiece(bunny){
    var coverX=[],coverY=[],coverIndex=[];
    var isSet=bunny.positionArr.every(function(v,i) {
        var positionX= bunny.position.x+bunny.drift[0]*bunny.width+bunny.drift[1]+v[0];
        var positionY= bunny.position.y+bunny.drift[2]*bunny.height+bunny.drift[3]+v[1];

        return fieldArr.some(function (value,index) {
            if (( fieldX+value[0] -positionX) * (fieldX+value[0] - positionX) + (fieldY+value[1] - positionY) * (fieldY+ value[1] - positionY) <= 300 && value[2] == false) {
                    coverX[i]=fieldX+value[0];
                    coverY[i]=fieldY+value[1];
                    coverIndex[i]=index;
                    return true;
            }else{
                return false;
            }
        });
    });
    if(!isSet) {
        bunny.position.x = bunny.originX;
        bunny.position.y = bunny.originY;
        bunny.scale.set(0.7);
    }else{ //
        //setScore(40);
        coverIndex.forEach(function(v,i){
            fieldArr[v][2]=true;
            coverPiece[v]=new PIXI.Graphics();
            coverPiece[v].DrawHexagonal(coverX[i],coverY[i],R,bunny.color);
            stage.addChild(coverPiece[v]);

        });
       // couldRemove();
        stage.removeChild(bunny);
        stage.CreatePiece(bunny.originX,bunny.originY,R,bunny.index);
    }

};
function setScore(pluss) {
    score += plus;
    $("#score").html(score);
    //$("#score").html(score);
}


//Draw the pieces of the hexagon
function DrawPiece(x,y,R){
    var piece=new PIXI.Graphics();
    var positionArr=[];
    var pieceColor=[];
    var drift;
    var random=Math.round(Math.random()*4);
     var color=colorArr[Math.round(Math.random()*4)];
  //    pieceColor=[colorArr[Math.round(Math.random()*4)], colorArr[Math.round(Math.random()*4)]];
    switch(random){
        case 0:
            positionArr=[fieldArr[0],fieldArr[9]];
            drift=[-0.5,longerSide,0,-longerSide];
            break;
        case 1:
            positionArr=[fieldArr[0],fieldArr[1]];
            drift=[-0.5,longerSide,0,-longerSide];
            break;
        case 2:
            positionArr=[fieldArr[0],fieldArr[17]];
            drift=[-0.5,longerSide,-1,longerSide];
            break;
        default:
            positionArr=[fieldArr[0], fieldArr[0]];
            drift=[-0.5,longerSide,0,-longerSide];
            break;
    }
      positionArr.forEach(function(value){  
        piece.DrawHexagonal(x+value[0],y+value[1],R,color);
        return value.slice(0,2);
    });
    return {"texture":piece.generateTexture(10),"positionArr":positionArr,"drift":drift, "color": color};

};

//画一个六边形
PIXI.Graphics.prototype.DrawHexagonal=function(x,y,R,backgroundColor){
    this.lineStyle(0);
    this.beginFill(backgroundColor);
    this.moveTo(x,y-R);
    this.lineTo(x+longerSide, y-R/2);
    this.lineTo(x+longerSide, y+R/2);
    this.lineTo(x,y+R);
    this.lineTo(x-longerSide, y+R/2);
    this.lineTo(x-longerSide, y-R/2);
    this.moveTo(x,y-R);
    this.endFill();
};

