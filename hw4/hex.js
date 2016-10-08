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
var coverMap=[];
var score = 0;
var gameJudge = [];
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
    var pieceObj;
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
        if (hitTest(pieceObj, mouseX, mouseY)) {
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
        window.removeEventListener("mouseup", doMouseUp, false);
        //var bool = judgeGameOver( pieceObj.pieceArr);
       var bool = false;
   console.log(bool);
        if (!bool) {
            if (dragging) {
            dragging = false;
            window.removeEventListener("mousemove", doMouseMove, false);
        }
        setPiece(layer, doMouseDown, mouseX, mouseY, pieceObj.pieceArr, originPosition, p, b);
    }else { //game over
        $("#score").html("Game Over!");
    }
    }
}

function judgeGameOver(pieceArr){
    var filled = fieldArr.every(function(v) {
            if (v[2]) 
                return true;
            else {
                return false;
            }
    });

    if (filled) { 
      return true; //game over
    } else if (pieceArr.length == 1) {
        return false;
    } else {
        return judgePiece(pieceArr);
    }
}
function judgePiece (pieceArr) {
    var bool;
    fieldArr.forEach(function(value, index) {
        var mouseX = value[0];
        var mouseY = value[1];
        return bool = pieceArr.every(function (vf) { 
            var positionX = mouseX + vf[0];
            var positionY = mouseY + vf[1];
            return fieldArr.some(function(v,i){
                if(((fieldX+v[0]-positionX)*(fieldX+v[0]-positionX) + (fieldY+v[1]-positionY)*(fieldY+v[1]-positionY)) <= 300 
                    && v[2] ==false) {
                        return false;
                } else {
                    return true;
                }
            });
        });
    });
}
function setPiece(layer, doMouseDown, mouseX, mouseY, pieceArr, originPosition, p, b) {
   var newPiece=[];
    var canSet = pieceArr.every(function(value, num) {
        var positionX= mouseX+value[0];
        var positionY= mouseY+value[1];
        var localLevel=value[2];
        var localColor = value[3];
        return fieldArr.some(function(v,i){
            if(((fieldX+v[0]-positionX)*(fieldX+v[0]-positionX) + (fieldY+v[1]-positionY)*(fieldY+v[1]-positionY)) <= 300 && v[2] ==false) {
                     coverMap[i]=[true, fieldX+v[0], fieldY+v[1], localLevel, localColor];
                     newPiece.push([i, localLevel]);
                     return true;
            } else {
                return false;
            }
    });
});
    if(!canSet) {
        p.clearRect(0,0,layer3.width, layer3.height);
        layer.addEventListener('mousedown', doMouseDown, false);
        originPosition.forEach(function(value){  
            drawHex(p, screenData.screenX * 0.7 + value[0], screenData.screenY * 0.5 + value[1], R, value[3]);   
        }); 
    }else {
        p.clearRect(0,0,layer3.width, layer3.height);
        b.clearRect(0,0,layer3.width, layer3.height)
        // covers.filter(c => c.wonder)
        //     .map(({coverX, coverY, coverColor}) => 
        //             drawHex(b, coverX, coverY， R, coverColor))
        coverMap.forEach(function(v,i){ 
            if(v != undefined) {
            if (v[0]) {
                fieldArr[i][2]=true;
                drawHex(b, v[1], v[2], R, v[4]);
           }
       }
        });
        setScore(40);
        createPiece(layer3, p, b);
        judge(layer3,b, fieldArr, coverMap, newPiece);
    } 
}
function hitTest(pieceObj, mouseX, mouseY) {
    var maxX = 0, maxY = 0, minX = 0, minY = 0;
    pieceObj.pieceArr.forEach(function(value, index) {
        if (pieceObj.pieceArr[index][0] < minX) {
            minX = pieceObj.pieceArr[index][0];
        }
        if (pieceObj.pieceArr[index][1] < minY) {
            minY = pieceObj.pieceArr[index][1];
        }
         if (pieceObj.pieceArr[index][0] > maxX) {
            maxX = pieceObj.pieceArr[index][0];
        }
        if (pieceObj.pieceArr[index][1] > maxY) {
            maxY = pieceObj.pieceArr[index][1];
        }
    });
    if ((mouseX < (screenData.screenX * 0.7 + maxX + longerSide)) 
        && (mouseX > (screenData.screenX * 0.7 + minX - longerSide)) 
        && (mouseY < (screenData.screenY * 0.5 + maxY + R)) 
        && (mouseY  > (screenData.screenY * 0.5 + minY - R))
        ) 
        return true;
    
    return false;
 }

function compare(v1,v2,v3){
    return Math.abs(v1-v2-v3)<=padding;
}

function drawPiece(p) {
    var pieceArr=[];
    var drift;
    var random = Math.round(Math.random()*3);
    var level1Random = Math.random();
    var level1;
    if (level1Random < 0.5) {
        level1 = 0;
    } else if (level1Random >= 0.5 && level1Random < 0.75) {
        level1 = 1;
    } else if (level1Random >= 0.75 && level1Random < 0.87) {
        level1 = 2;
    } else if (level1Random >= 0.87 && level1Random < 0.94) {
        level1 = 3;
    } else {
        level1 = 4;
    }
   
   var level2Random = Math.random();
    var level2;
    if (level2Random < 0.5) {
        level2 = 0;
    } else if (level2Random >= 0.5 && level2Random < 0.75) {
        level2 = 1;
    } else if (level2Random >= 0.75 && level2Random < 0.87) {
        level2 = 2;
    } else if (level2Random >= 0.87 && level2Random < 0.94) {
        level2 = 3;
    } else {
        level2 = 4;
    }
   
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

function setScore(plus) {
    score +=plus;
    $("#score").html(score);
}

