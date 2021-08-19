canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(300, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console.log("X = " + mouse_x + "and Y = " + mouse_y)
circle(mouse_x, mouse_y)
}

function circle(mouse_x, mouse_y)
{
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.linewidth=5;
 ctx.arc(mouse_x, mouse_y, 50, 0, 2*Math.PI);
 ctx.stroke();   
}