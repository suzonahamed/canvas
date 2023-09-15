var canvas=document.getElementById("myCanvas");

var ctx=canvas.getContext("2d");

//ctx.lineWidth=6;

//ctx.strokeStyle="black";
//ctx.strokeRect(50,50,350,250);

ctx.fillStyle="green";
ctx.fillRect(0,0,660,440);

var centerX=canvas.width/2;
var centerY=canvas.height/2;

ctx.beginPath();


ctx.arc(centerX,centerY,100,0,2*Math.PI,false);

ctx.fillStyle="red";
ctx.fill();

document.write("<h1>Bangladesh</h1>");





