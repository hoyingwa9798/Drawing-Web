//Defination
var c = document.getElementById("main-area");
var ctx = c.getContext("2d");
let mouseX,mouseY;
let mouseState = 1;
const clearButton = document.querySelector(".clear-button");
const inputColor = document.getElementById("color-selector");
let colorValue = "rgb(0,0,1)";


function drawDot(move){
    getTouchPosition(move);
    //define the color
    ctx.fillStyle =  colorValue;
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,4,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
}
//get the position of the mouse in the windows
function getTouchPosition(move){
    if (!moves) var moves = event;
    if(move.offsetX){
        mouseX = move.offsetX;
        mouseY = move.offsetY;
    }

    else if(move.layerX){
        mouseX = move.layerX;
        mouseY = move.layerY;
    }
}

function mouseDown(e){
    mouseState = 0;
    drawDot(e);
}
//if mouse is up, do not draw a dot
function mouseUp(){
    mouseState = 1;
}

function mouseMove(move){
    if(mouseState == 0){
        drawDot(move);
    }
}

function clearBoard(){
    ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
}

if(c){
    c.addEventListener('mousedown',(e)=>mouseDown(e));
    c.addEventListener('mousemove',(e)=>mouseMove(e));
    c.addEventListener('mouseup',mouseUp);
}
//get the value of the color from the input
clearButton.addEventListener('click',clearBoard);
inputColor.addEventListener('input',(e)=>{
    colorValue = e.target.value;
})