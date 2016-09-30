'use strict'
var game, startBtn;
window.onload = function(){
    startBtn = document.getElementById('showHEX');
    startBtn.onclick = function(canvas) {  
        var btn=document.createElement("BUTTON");
        document.body.appendChild(btn);
    }
}