var road, gumballs, chocolates, jelly, brocoli, runner
var roadImg, gumballsImg, chococlateImg, jellyImg, brocoliImg, runnerImg
 var sweetCollection
var gumballG, chocolatesG, jellyG, brocoliGroup

var PLAY=1
var END=0
var gameState=PLAY
function preload(){

  roadImg=loadImage("road.png")
  gumballsImg=loadImage("gumballs.jpg")
  jellyImg=loadImage("jelly.jpg")
  chocolatesImg=loadImage("chocolates.jpg")
  brocoliImg=loadImage("broccoli.jpg")
  runnerImg=loadAnimation("runner1.png","runner2.png")
  endImg=loadAnimation("gameover.png")
}






function setup() {
  createCanvas(windowWidth,windowHeight);
  jellyG=new Group()
brocoliGroup=new Group()
gumballG=new Group()
chocolatesG=new Group()

  road=createSprite(width/2,200,width,height)
 road.addImage(roadImg)

 runner = createSprite(width/2,height-20,20,20);
runner.addAnimation("boyRunning",runnerImg);
runner.scale=0.08;
  sweetCollection=0
}

function draw() {
 
  if(gameState===PLAY){
    background(0);
    runner.x = World.mouseX;
    
    edges= createEdgeSprites();
    runner.collide(edges);

    if(road.y > height-200 ){
      road.y = 0;

    }
    createBrocoli()
createChocolates()
createGumballs()
createJelly()
  }
 
 
  background(255,255,255);  
  road.velocityY=5
 
 



if (gumballG.isTouching(runner)) {
  sweetCollection=sweetCollection + 150;
  gumballG.destroyEach();
  
}
else if (chocolatesG.isTouching(runner)) {
  sweetCollection=sweetCollection + 150;
  chocolatesG.destroyEach();
  
  
}else if(jellyG.isTouching(runner)) {
  sweetCollection= sweetCollection + 100;
  jellyG.destroyEach();
 
}
else if(brocoliGroup.isTouching(runner)) {
 gameState=END;
 
 
    runner.addAnimation("boyRunning",endImg);
        runner.x=width/2;
        runner.y=height/2;
        runner.scale=0.6;
        runner.velocityY=0
        gumballG.destroyEach();
        chocolatesG.destroyEach();
        jellyG.destroyEach();
        brocoliGroup.destroyEach();
        
        gumballG.setVelocityYEach(0);
        chocolatesG.setVelocityYEach(0);
        jellyG.setVelocityYEach(0);
        brocoliGroup.setVelocityYEach(0);
     road.velocityY=0
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Sweet:"+ sweetCollection,width-150,30);
}


function createJelly() {
  if (World.frameCount % 70 == 0) {
  var jelly = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jelly.addImage(jellyImg);
  jelly.scale=0.09;
  jelly.velocityY = 5;
  jelly.lifetime = 200;
  jellyG.add(jelly);
  }
}

function createChocolates() {
  if (World.frameCount % 50 == 0) {
  var chocolates = createSprite(Math.round(random(50, width-50),40, 10, 10));
  chocolates.addImage(chocolatesImg);
  chocolates.scale=0.1;
  chocolates.velocityY = 5;
  chocolates.lifetime = 200;
  chocolatesG.add(chocolates);
}
}

function createGumballs() {
  if (World.frameCount % 60 == 0) {
  var gumballs = createSprite(Math.round(random(50, width-50),40, 10, 10));
  gumballs.addImage(gumballsImg);
  gumballs.scale=0.03;
  gumballs.velocityY = 5;
  gumballs.lifetime = 200;
  gumballG.add(gumballs);
  }
}

function createBrocoli(){
  if (World.frameCount % 40 == 0) {
  var brocoli = createSprite(Math.round(random(50, width-50),40, 10, 10));
  brocoli.addImage(brocoliImg);
  brocoli.scale=0.07;
  brocoli.velocityY = 5;
  brocoli.lifetime = 200;
  brocoliGroup.add(brocoli);
  }
}

