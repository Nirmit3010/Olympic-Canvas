var mouseEvent= "empty";
var last_xposition, last_yposition;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width=4;
radius=10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentXPosition=e.clientX-canvas.offsetLeft;
    currentYPosition=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        console.log("x="+last_xposition+",y="+last_yposition);
        ctx.moveTo(last_xposition, last_yposition);

        console.log("current x="+currentXPosition+", current y="+currentYPosition);
        ctx.lineTo(currentXPosition, currentYPosition);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentXPosition, currentYPosition, radius, 0, 2 * Math.PI);

        ctx.stroke();
    }
    last_xposition=currentXPosition;
    last_yposition=currentYPosition;

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}