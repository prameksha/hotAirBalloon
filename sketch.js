var balloon , balloonI;
var back;
var database;

function preload(){

  balloonI = loadAnimation("Hot Air Ballon-03 (1).png");
  balloonII = loadAnimation("Hot Air Ballon-03 (2).png");
  back = loadImage("Hot Air Ballon back.png");

  
}


function setup() {
  

  createCanvas(500,500);

  database = firebase.database();
  
  balloon = createSprite(150,280,20,50);
  balloon.addAnimation("running", balloonI);
  balloon.addAnimation("collided", balloonII);
  balloon.scale=0.5;
  
  
  
}

function draw() {
  background(back);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
     balloon.x=balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }

  drawSprites();
}