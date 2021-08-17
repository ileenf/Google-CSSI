// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

/* global createCanvas, background */

function setup() {
  // Code here runs only once
  createCanvas(1000, 800);
  colorMode(RGB)
}

function draw() {
  // Code here runs continuously
  background(220);

  noFill();
  
  
  
  strokeWeight(8);

  //blue
  stroke(color(0, 133, 199));
  ellipse(100, 100, 100); 
  

  //yellow
  stroke(color(244, 195, 0));
  ellipse(160, 150, 100);
  stroke(color(0, 133, 199));
  arc(125, 100, 50, 50, 0, 0.25)
  
  //black
  stroke(color(0, 0, 0));
  ellipse(220, 100, 100);
  stroke(color(244, 195, 0));
  arc(145, 100, 50, 50, -0.1, 0)
  
  //green
  stroke(color(0, 159, 61));
  ellipse(280, 150, 100);
  stroke(color(0, 0, 0));
  arc(245, 100, 50, 50, 0, 0.25)
  
  //red
  stroke(color(223, 0, 36));
  ellipse(340, 100, 100);
  stroke(color(0, 159, 61));
  arc(265, 100, 50, 50, -0.1, 0)
  
  
  //microsoft
  noStroke()
  fill(color(246, 83, 20))
  rect(500, 50, 70, 70)
  
  fill(color(124, 187, 0))
  rect(575, 50, 70, 70)
  
  fill(color(0, 161, 241))
  rect(500, 125, 70, 70)
  
  fill(color(255, 187, 0))
  rect(575, 125, 70, 70)
  

  //blue star logo
  fill(color(45, 131, 193))
  triangle(100, 300, 200, 250, 195, 340 )
  triangle(305, 300, 205, 250, 215, 340 )
  triangle(310, 305, 295, 400, 220, 355 )
  triangle(203, 365, 290, 405, 125, 405 )
  triangle(95, 305, 195, 355, 120, 400 )
  
  //red 3d pyramid
  fill(color(247, 151, 32))
  triangle(500, 300, 500, 385, 400, 440)
  
  fill(color(220,20,60))
  triangle(600, 440, 500, 385, 400, 440)
  
  fill(color(139,0,0))
  triangle(500, 300, 500, 385, 600, 440)
  

}
