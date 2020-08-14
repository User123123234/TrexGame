var trex;
var treximg;
var ground;
var groundimg;
var ground2;
var cloud;
var cloudimg;
var obstacles;
var clouds;
var obs
var obsimg1,obsimg2,obsimg3,obsimg4,obsimg5,obsimg6;
var play= 1;
var end= 0;
gameState=play;
var score=0;
var restart;
var restartimg;
var gameover;
var gameoverimg;

function preload(){
  treximg=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg=loadImage("ground2.png");
  cloudimg=loadImage("cloud.png");
  obsimg1=loadImage("obstacle1.png");
  obsimg2=loadImage("obstacle2.png");
  obsimg3=loadImage("obstacle3.png");
  obsimg4=loadImage("obstacle4.png");
  obsimg5=loadImage("obstacle5.png");
  obsimg6=loadImage("obstacle6.png");
  restartimg=loadImage("restart.png")
  gameoverimg=loadImage("gameOver.png")
}

function setup() {
  createCanvas(600, 200);
trex=createSprite(60,160,20,20)
trex.addAnimation("treximg",treximg);
trex.scale=0.5;
obstacles= new Group();
clouds=new Group();

ground=createSprite(300,175)
ground.addImage("groundimg",groundimg);

ground2=createSprite(300,183,600,1)
ground2.visible=false;







}

function draw() {
  background(250);
  trex.collide(ground2);
  
  if (gameState===play){
  ground.velocityX=-2;
  trex.velocityY=trex.velocityY+0.4;
  if (frameCount%90===0){
   cloudcreate(); 
    obs();
  }
   
if (ground.x<0){
ground.x=ground.width/2;
ground.velocityX=-2;
}
  
if (keyDown("space")&trex.y>=159){
trex.velocityY=-9;
}
    
    
  if (trex.isTouching(obstacles)){
    gameState=end
    score=0;
  }
}

  
else if(gameState===end){
trex.velocityX=0;
ground.velocityX=0;
obstacles.velocityX=0;
clouds.velocityX=0;
obstacles.destroyEach();
clouds.destroyEach();
restart=createSprite(300,70);
restart.addImage(restartimg);
gameOver=createSprite(300,130);
gameOver.addImage(gameoverimg);
}
  
  
  
  
drawSprites();
}


function cloudcreate(){
 cloud=createSprite(random(600,800),random(20,100))
cloud.addImage("cloudimg",cloudimg);
cloud.velocityX=-2; 
cloud.scale=0.8;
cloud.depth=trex.depth
trex.depth=trex.depth+1
clouds.add(cloud);
}




function obs(){
var obs=createSprite(random(600,700), 160,10,10);
var rand= Math.round(random(1,6));
console.log(rand);
switch(rand){
case 1:obs.addImage("obsimg",obsimg1) 
    break;
case 2:obs.addImage("obsimg",obsimg2)
    break;
case 3:obs.addImage("obsimg",obsimg3) 
    break;
case 4:obs.addImage("obsimg",obsimg4) 
    break;
case 5:obs.addImage("obsimg",obsimg5) 
    break;
case 6:obs.addImage("obsimg",obsimg6)   
    break;
    default:break
}
    obstacles.add(obs);
    obs.scale=0.5;
obs.velocityX=-2;
}