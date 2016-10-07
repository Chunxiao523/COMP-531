'use strict'
var screenData={};
var fieldX = 400;
var fieldY = 400;
var R;
var longerSide;
var fieldArr = []
var padding=5;
var backgroundColor = '#4D4D4B';
var color=["#898CFF","#71E096","#F5A26F","#FFDC89","#FF89B5"];
window.onload = function() { 
    var layer1 = document.getElementById("layer1");
    var layer2 = document.getElementById("layer2");
    var layer3 = document.getElementById("layer3"); 
    var c = layer1.getContext("2d");
    var b = layer2.getContext("2d");
    var p = layer3.getContext("2d");
    screenData=screenAdjustment();
    createBackground(c);
    createPiece(layer3, p, b);
}

function createPiece(layer, p, b) {
    var mouseX = 0;
    var mouseY = 0;
    var dragging = false;
    var pieceObj = null;
    var originPosition=[];
    init();
    function init() {
        pieceObj = drawPiece(p);
        originPosition = pieceObj.pieceArr;
        layer.addEventListener('mousedown', doMouseDown, false);
    }
    function doMouseDown(e){
        var bRect = layer.getBoundingClientRect();
        mouseX = (e.clientX - bRect.left)*(layer.width/bRect.width);
        mouseY = (e.clientY - bRect.top)*(layer.height/bRect.height);
       // if (hitTest(pieceObj, mouseX, mouseY)) {
        if (true) {
            dragging = true;
        }
        if (dragging) {    
            window.addEventListener("mousemove", doMouseMove, false);
        }
        layer.removeEventListener("mousedown", doMouseDown, false);
        window.addEventListener("mouseup", doMouseUp, false);
    }
    function doMouseMove(e) {
        var bRect = layer.getBoundingClientRect();
        mouseX = (e.clientX - bRect.left)*(layer.width/bRect.width);
        mouseY = (e.clientY - bRect.top)*(layer.height/bRect.height);
        p.clearRect(0,0,layer.width, layer.height);
        pieceObj.pieceArr.forEach(function(value){  
            drawHex(p,mouseX + value[0], mouseY + value[1], R, value[3]);   
        }); 
    }
    function doMouseUp() {
       layer.addEventListener("mousedown", doMouseDown, false);
        window.removeEventListener("mouseup", doMouseUp, false);
        if (dragging) {
            dragging = false;
            window.removeEventListener("mousemove", doMouseMove, false);
        }
        setPiece(mouseX, mouseY, pieceObj, originPosition, p, b);
    }
}

function hitTest() {

}

function Cover() {
    this.coverX;
    this.coverY;
    this.coverColor;
    this.coverIndex;
    this.wonder = false;
}

function setPiece(mouseX, mouseY, pieceObj, originPosition, p, b) {
   // var covers = [];
    var coverX=[],coverY=[],coverColor=[],coverIndex=[];
    var canSet = pieceObj.pieceArr.every(function(value, num) {
        var positionX= mouseX+value[0];
        var positionY= mouseY+value[1];
        return fieldArr.some(function(v,i){
            if(((fieldX+v[0]-positionX)*(fieldX+v[0]-positionX) + (fieldY+v[1]-positionY)*(fieldY+v[1]-positionY)) <= 300 && v[2] ==false) {
               // var cover = { coverX： fieldX + v[0], coverY: };
                    // cover.coverX=fieldX+v[0];
                    // cover.coverY=fieldY+v[1];
                    // cover.coverColor=value[3];
                    // cover.coverIndex=i;
                    // cover.wonder=true;
                    // covers.push(cover);
                     coverX[i]=fieldX+v[0];
                     coverY[i]=fieldY+v[1];
                     coverColor[i]=value[3];
                     coverIndex[i]=i;
                     //cover.wonder=true;
                     //covers.push(cover);
                    return true;
            } else {
                return false;
            }
    });
});
    if(!canSet) {
        p.clearRect(0,0,layer3.width, layer3.height);
        originPosition.forEach(function(value){  
            drawHex(p, screenData.screenX * 0.7 + value[0], screenData.screenY * 0.5 + value[1], R, value[3]);   
        }); 
    }else {
        p.clearRect(0,0,layer3.width, layer3.height);
        // covers.filter(c => c.wonder)
        //     .map(({coverX, coverY, coverColor}) => 
        //             drawHex(b, coverX, coverY， R, coverColor))
        coverIndex.forEach(function(v,i){ 
           // if (v.wonder) {
                fieldArr[v][2]=true;
                drawHex(b, coverX[i],coverY[i], R, coverColor[i]);
            //}
        });
        pieceObj.pieceArr = [];
        createPiece(layer3, p, b);
    }
    // pieceObj = null;
   // pieceObj.pieceArr = [];
   // 
}
 
function drawPiece(p) {
    var pieceArr=[];
    var drift;
    var random = Math.round(Math.random()*3);
    var level1 = 1 + Math.round(Math.random()*4);
    var level2 = Math.round(Math.random()*4);
    switch(random){
        case 0:
            pieceArr.push([0, 0, level1, color[level1]]);  //horizontal
            pieceArr.push([2*longerSide+padding, 0, level2, color[level2]]);
            drift=[-0.5,longerSide,0,-longerSide]; 
            break;
        case 1:
            pieceArr.push([0, 0, level1, color[level1]]);  //right bottom
            pieceArr.push([longerSide, 3*R/2 + padding, level2, color[level2]]); 
            drift=[-0.5,longerSide,-1,longerSide];
            break;
        case 2:
            pieceArr.push([0, 0,level1, color[level1]]); //right top
            pieceArr.push([longerSide+padding, -3*R/2 - padding, level2, color[level2]]); 
            drift=[-0.5,longerSide,0,-longerSide];
            break;
        default:
            pieceArr.push([0, 0, level1, color[level1]]); //single one
            drift=[-0.5,longerSide,0,-longerSide];
            break;
    }
    pieceArr.forEach(function(value){  
       drawHex(p, screenData.screenX * 0.7+value[0], screenData.screenY * 0.5+value[1], R, value[3]);   
       return value.slice(0,2);
      });
    return {"pieceArr":pieceArr,"drift":drift};
}

function createBackground(c) {
    for (var i = 4; i >=0; i --) {
        pushCenterPoints(i*(longerSide+padding/2), -i*(3*longerSide/2+2*padding), 9-i);
    }
    for (var i = 1; i <=4; i ++) {
        pushCenterPoints(i*(longerSide+padding/2), i*(3*longerSide/2+2*padding), 9-i);
    }

    function pushCenterPoints(x, y, num) {
        for (var i = 0; i < num; i ++) {
            fieldArr.push([x+i*(2*longerSide+padding), y, false]);
        }
    }
    fieldArr.forEach(function(value) {
       drawHex(c, fieldX + value[0], fieldY + value[1], R, backgroundColor);
    });
}

function drawHex(c, x, y, r, color) {
    c.beginPath();
    c.fillStyle = color;
    c.moveTo(x,y-R);
    c.lineTo(x+longerSide, y-R/2);
    c.lineTo(x+longerSide, y+R/2);
    c.lineTo(x,y+R);
    c.lineTo(x-longerSide, y+R/2);
    c.lineTo(x-longerSide, y-R/2);
    c.lineTo(x,y-R);    
    c.fill();
    c.stroke();
    c.closePath();
    c.fillStyle = '';
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
        layer1.width=$(window).width();
        layer1.height=$(window).height();
        layer2.width=$(window).width();
        layer2.height=$(window).height();
        layer3.width=$(window).width();
        layer3.height=$(window).height();
        return {"screenX": screenX, "screenY": screenY,"type":0};
    }else{
        fieldX = screenX / 10;
        fieldY = screenY / 2.5;
        R = screenX / 20;
        longerSide = R * 1.73 / 2;
        return {"screenX": screenX, "screenY": screenY,"type":1};
    }
}