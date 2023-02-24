alert("Hello, world!");

// we wwantt to grap html element tag canvas.
var canvas = document.querySelector('canvas');

canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

// fillRect() is a method of the 2D canvas context that is used to draw a filled rectangle on the canvas.
// The method takes four arguments:
// x - the x-coordinate of the upper-left corner of the rectangle
// y - the y-coordinate of the upper-left corner of the rectangle
// width - the width of the rectangle
// height - the height of the rectangle)
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255,0,0,0.5';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.5';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0,255,0,0.5';
c.fillRect(300, 300, 100, 100);


console.log(canvas);

//Line
c.beginPath();              
c.lineWidth = "5";
c.strokeStyle = "green";  // Green path
c.moveTo(150, 400);
c.lineTo(1800, 400);
c.stroke();  // Draw it

c.beginPath();
c.strokeStyle = "purple";  // Purple path
c.moveTo(150, 50);
c.lineTo(150, 800);            
c.stroke();  // Draw it

c.beginPath();
c.strokeStyle = "black";  // Purple path
c.moveTo(150, 400);
c.lineTo(500, 100);     
c.lineTo(800, 400) ;  
c.lineTo(900, 200) ; 
c.lineTo(1000, 400) ;      
c.stroke();  // Draw it

// Arc / Circle 
/*
c.beginPath();
c.arc(1000, 300, 250, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
*/

for (var i = 0; i < 3; i++) {
    var x = Math.random();
    var y = Math.random();
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
}