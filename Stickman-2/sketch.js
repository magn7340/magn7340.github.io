  let bellyButton = 70 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 150, 255); //sky
  
  bellyButton = bellyButton + 1
  
  
  
  
  stroke(0);
  fill(0, 255, 0);
  rect(-2, 310, 605, 101); //grass
  fill(255, 255, 255);
  strokeWeight(4);
  line(bellyButton, 150, bellyButton - 50, 225); //leftArm
  line(bellyButton, 150, bellyButton + 50, 225); //rightArm
  line(bellyButton, 150, bellyButton, 275); //body
  line(bellyButton, 275, bellyButton - 50, 350); //leftLeg
  line(bellyButton, 275, bellyButton + 50, 350); //rightLeg
  fill(255, 165, 140);
  circle(bellyButton, 120, 60); //Head
  line(bellyButton - 10, 130, bellyButton + 10, 130); //mouth
  // curve(bellyButton - bellyButton, 200, 215, 130, 185, 130, bellyButton - 300, -100); //upperLip
  // curve(bellyButton - bellyButton, 0, 195, 137, 190, 148, bellyButton - bellyButton, 0); //lowerLip
  strokeWeight(2); 
  fill(255);
  circle(bellyButton - 10, 110, 10); //leftEye
  circle(bellyButton + 10, 110, 10); //rightEye
  strokeWeight(3);
  stroke(0, 0, 255)
  point(bellyButton - 10, 110); //leftPupil
  point(bellyButton + 10, 110); //rightPupil
}