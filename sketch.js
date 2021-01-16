var PLAY=1;
var restart,restartImg
var gameOver,gameOverImg
var END=0;
var gameState=PLAY
var score;
var player,playerImg
var star,zombie
var rock,rockImg
var bg,bgImg
var invisibleGround
var obstacleGroup
function preload(){
bgImg=loadImage("Images/background.jpg");
playerImg=loadImage("Images/bunny.png");
rockImg=loadImage("Images/stone.jpg");
gameOverImg=loadImage("Images/gameOver.png"); 
restartImg=loadImage("restart.jpg");
}
function setup(){
  createCanvas(1200,400)
  bg=createSprite(600,200,1200,400);
  bg.addImage("bg",bgImg);
  bg.scale=3;
  
  score=0;
  strokeWeight(4);
  stroke("black");
  textSize(20);

  player=createSprite(65,340);
  player.addImage("player",playerImg);
  player.scale=0.25;

  obstacleGroup= new Group();

  invisibleGround=createSprite(600,395,1200,5);
  invisibleGround.visible=false;

  gameOver=createSprite(600,200);


 restart=createSprite(600,250);
 
}
function draw(){
  background(0);
 
  if(gameState===PLAY){
    bg.velocityX=-3;

    score=score+Math.round(getFrameRate()/60);
    if (score===100){
  question1();
    }

    if(bg.x<0){
      bg.x=600;
    }
    if(keyDown("Space")){
      player.velocityY=-10;
    }
    player.velocityY=player.velocityY+0.8;
    
    SpawnObstacles();

    if(obstacleGroup.isTouching(player)){
gameState=END;
    }
  }
  else if(gameState===END){
    bg.velocityX=0;
    player.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);

  }
  
   
  
  
  player.collide(invisibleGround);


  drawSprites();
  text("Score:"+score,1100,50);
}

function SpawnObstacles(){
if(frameCount%80===0){
  var obstacle=createSprite(1200,380);
  obstacle.velocityX=-7;
  obstacle.scale=0.3;
  obstacle.addImage(rockImg);
  obstacle.lifetime=172;
  obstacleGroup.add(obstacle);
}
}
function question1(){
  text("How can I potect myself against Covid-19?",600,400);

}