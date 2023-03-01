//alert("Hello, world!");

// we want to grap html element tag canvas.
var canvas = document.querySelector('canvas');
// fillRect() is a method of the 2D canvas context that is used to draw a filled rectangle on the canvas.
// The method takes four arguments:
// x - the x-coordinate of the upper-left corner of the rectangle
// y - the y-coordinate of the upper-left corner of the rectangle
// width - the width of the rectangle
// height - the height of the rectangle)
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255,0,0,0.5';



console.log(canvas);

 // Define grass properties
      const grassHeight = 35;
      const grassWidth = 8;
      const numGrass = Math.floor(canvas.width / grassWidth);

      // Define colors
      const bgColor = "#c2f2e8";
      const grassColor = "#69b478";

      // Set initial grass positions
      let grassPos = [];
      for (let i = 0; i < numGrass; i++) {
        grassPos.push({
          x: i * grassWidth,
          y: canvas.height - grassHeight,
          sway: Math.random() * 25 - 15,
        });
      }


      function drawGrass() {
        // Clear canvas
        c.fillStyle = bgColor;
        c.fillRect(0, 0, canvas.width, canvas.height);



//////////////////////////////  Some caption text (must be written on the canvas!) /////////////////

c.font = "24px Arial";
c.fillStyle = "black";
c.fillText("Hello World !", 500, 100);


/////////////////////////////// Draw the house  ///////////////////////////////
// House Roof
c.beginPath();
c.lineWidth = "5";
c.strokeStyle = "black";  // Black path
c.moveTo(840, 410);
c.lineTo(955, 320); 
c.lineTo(1080, 410); 

// Set background color for roof
c.fillStyle = "#4c4c4c";
c.fill();

//House Walls
c.stroke();  
c.fillStyle = "black";
c.fillRect(845, 410, 230, 140);
c.fillStyle = "white";
c.fillRect(860, 440, 50, 50);
c.fillRect(930, 440, 50, 100);
c.fillRect(1010, 440, 50, 50);

// Chimney
c.fillStyle = "gray";
c.fillRect(1015, 315, 40, 80);
c.strokeRect(1015, 315, 40, 80);

// Smoke
c.beginPath();
c.fillStyle = "#726E6D";
c.arc(1000, 260, 20, 0, Math.PI * 2);
c.arc(1030, 260, 25, 0, Math.PI * 2);
c.arc(1060, 260, 20, 0, Math.PI * 2);

c.closePath();
c.fill();


///////////////////////////////////////// Mountain  /////////////////////////////////////////
    c.fillStyle = "#977c53";  
    c.beginPath();
    c.moveTo(0, canvas.height);
    c.lineTo(0, canvas.height - 100);
    c.quadraticCurveTo(canvas.width / 4, canvas.height - 200, canvas.width / 2, canvas.height - 100);
    c.quadraticCurveTo(canvas.width * 3 / 4, canvas.height, canvas.width, canvas.height - 100);
    c.lineTo(canvas.width, canvas.height);
    c.closePath();
    c.fill();

//////////////////////////////////////////  CLOUD with SUN //////////////////////////////////////////////
// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 45;
var cloudX = 120;
var cloudY = 180;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();

 //  the moon
        c.fillStyle = "#d2c4ad";
        c.beginPath();
        c.arc(100, 100, 50, 0, Math.PI * 0.5, true);
        c.fill();


// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 35;
var cloudX = 650;
var cloudY = 150;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();


         ///////////////////////  Sun   /////////
        // Arc / Circle 
        c.beginPath();
        c.lineWidth = "5";
        c.arc(980, 120, 70, 0, Math.PI * 2, false);
        c.strokeStyle = '#FFE88C';
        c.fillStyle = "yellow";
        c.fill();
        c.stroke();


// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 30;
var cloudX = 1000;
var cloudY = 180;



// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();

// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 30;
var cloudX = 400;
var cloudY = 280;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();
//////////////////////////////////////////  CLOUD with SUN END //////////////////////////////////////////////


/////////////////////////////////////////  The Tree  //////////////////////////////////////////////////////////

// Tree 1  //////////////////////////
var treeX = 600;
var treeY = 565;
var trunkColor = "#663300";
var leavesColor = "#339933";
var trunkWidth = 30;
var trunkHeight = 100;
var leavesRadius = 45;  

// Draw the trunk
c.fillStyle = trunkColor;
c.fillRect(treeX - trunkWidth / 2, treeY - trunkHeight, trunkWidth, trunkHeight);

// Draw the leaves
c.fillStyle = leavesColor;
c.beginPath();
c.arc(treeX, treeY  - trunkHeight - leavesRadius, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - leavesRadius, treeY - trunkHeight - leavesRadius * 0.7, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - leavesRadius, treeY - trunkHeight - leavesRadius * 1.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + leavesRadius, treeY - trunkHeight - leavesRadius * 1.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX, treeY - trunkHeight - leavesRadius * 0.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX, treeY - trunkHeight - leavesRadius - 2 * leavesRadius  * 0.8, leavesRadius, 0, Math.PI * 2);

c.closePath();
c.fill();

// Tree 2 /////////////////////////
var treeX = 350;
var treeY = 565;
var trunkColor = "#663300";
var leavesColor = "#339933";
var trunkWidth = 30;
var trunkHeight = 130;
var leavesRadius = 45;  

// Draw the trunk
c.fillStyle = trunkColor;
c.fillRect(treeX - trunkWidth / 2, treeY - trunkHeight, trunkWidth, trunkHeight);


// Draw the leaves
c.fillStyle = leavesColor;
c.beginPath();
c.arc(treeX, treeY  - trunkHeight - leavesRadius, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 0.5, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + 2 - leavesRadius, treeY - trunkHeight - leavesRadius * 0.6, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 2.0, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + 2 - leavesRadius, treeY - trunkHeight - leavesRadius * 1.4, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 2.0, leavesRadius, 0, Math.PI * 2);

c.closePath();
c.fill();

                                    //////  The Tree end  /////////


                                 /////////////  Rocks  //////////////////

 c.beginPath();
c.lineWidth = "2";
c.strokeStyle = "black";  // Black outline
c.fillStyle = "#ccc";     // Gray fill color
c.moveTo(450, 480);
c.lineTo(400, 520);
c.lineTo(430, 600);
c.lineTo(500, 600);
c.lineTo(550, 500);
c.lineTo(550, 490);
c.closePath();
c.stroke();
c.fill();

 c.beginPath();
c.lineWidth = "2";
c.strokeStyle = "black";  // Black outline
c.fillStyle = "#ccc";     // Gray fill color
c.moveTo(670, 480);
c.lineTo(660, 520);
c.lineTo(680, 600);
c.lineTo(780, 600);
c.lineTo(720, 500);
c.lineTo(720, 490);
c.closePath();
c.stroke();
c.fill();





        // Draw grass
        c.fillStyle = grassColor;
        for (let i = 0; i < numGrass; i++) {
          c.beginPath();
          c.moveTo(grassPos[i].x, grassPos[i].y);
          c.quadraticCurveTo(
            grassPos[i].x + grassWidth / 2 + grassPos[i].sway,
            grassPos[i].y - grassHeight / 2,
            grassPos[i].x + grassWidth,
            grassPos[i].y
          );
          c.lineTo(grassPos[i].x + grassWidth, canvas.height);
          c.lineTo(grassPos[i].x, canvas.height);
          c.closePath();
          c.fill();

          // Update grass position
          grassPos[i].sway += Math.random() * 2 - 1;
          grassPos[i].y += Math.random() * 2;
          if (grassPos[i].y > canvas.height - grassHeight) {
            grassPos[i].y = canvas.height - grassHeight;
          }
        }
      }




         // Call the drawGrass function every 20 milliseconds
      setInterval(drawGrass, 20);