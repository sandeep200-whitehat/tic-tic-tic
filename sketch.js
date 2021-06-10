var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup(){
  canvas = createCanvas(400, 400);
  angleMode(DEGREES);
 }
 
 function draw(){
  background(0);
  translate(200,200);
  rotate(-90);
 
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  let secondAngle = map(sc,0,60,0,360);
  let minuteAngle = map(mn,0,60,0,360);
  let hourAngle = map(hr % 12,0,12,0,360);
  strokeWeight(8);
  noFill();
  stroke(255,0,0);
  
  arc(0,0,300,300,0,secondAngle);
 
  stroke(0,255,0);

  arc(0,0,280,280,0,minuteAngle);
  
  stroke(0,0,255);
 
  arc(0,0,260,260,0,hourAngle);
 
  push();
  rotate(secondAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
 
  push();
  rotate(minuteAngle);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();
 
  push();
  rotate(hourAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
 
  stroke(255);
  point(0,0);
 
 
 }