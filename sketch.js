var diano,dianoImg;

var bg,bgImg;
var invisibleGround;

var collidedSound,jumpSound;

var obsImg,shrub1Img,shrub2Img,shurb3Img;

function preload(){
  dianoImg = loadAnimation("diano1.png","diano 2.png","diano 3.png");  
  bgImg = loadImage("bg.png");

  collidedSound = loadSound("collided.wav");
  jumpSound = loadSound("jump.wav");

  obsImg = loadImage("stone.png");
  shrub1Img = loadImage("shrub1.png");
  shrub2Img = loadImage("shrub2.png");
  shrub3Img = loadImage("shrub3.png");
}

function setup() {
  createCanvas(800,630);
  bg = createSprite(700, 300, 7000, 200);
  bg.addImage(bgImg);
  bg.scale = 0.4;
  //bg.x = bg.width/2;

  diano = createSprite(100,520,1000,50);
  diano.addAnimation("dianoImg",dianoImg);
  diano.scale = 2;

  invisibleGround = createSprite(80,610,100,10);
  invisibleGround.visible = false;

  obstaclesGroup = new Group ();
  shrub1Group = new Group ();
  shrub2Group = new Group ();
  shrub3Group = new Group ();

}

function draw(){ 
  background(0); 

  bg.velocityX = -4;

if(bg.x < 0){
    bg.x = 400;
  }


  if(keyDown("space")){
    diano.velocityY = -12;

  }

  diano.velocityY = diano.velocityY +0.8;

  diano.collide(invisibleGround);

  spawnObstacles();
  spawnShrub1();
  spawnShrub2();
  spawnShrub3();
 
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(2000,570,70,70);
    obstacle.addImage(obsImg);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    obstacle.lifetime = 500;
    var rand = Math.round(random(1,9));

    obstaclesGroup.add(obstacle);
  }
}

function spawnShrub1(){
  if(frameCount % 80 === 0){
    var shrub1 = createSprite(2000,570,70,70);
    shrub1.addImage(shrub1Img);
    shrub1.scale = 0.05;
    shrub1.velocityX = -6;
    shrub1.lifetime = 500;
    var rand = Math.round(random(1,9));

    shrub1Group.add(shrub1);
  }
}

function spawnShrub2(){
  if(frameCount % 100 === 0){
    var shrub2 = createSprite(2000,570,70,70);
    shrub2.addImage(shrub2Img);
    shrub2.scale = 0.05;
    shrub2.velocityX = -6;
    shrub2.lifetime = 500;
    var rand = Math.round(random(1,9));

    shrub2Group.add(shrub2);
  }
}

function spawnShrub3(){
  if(frameCount % 300 === 0){
    var shrub3 = createSprite(2000,570,70,70);
    shrub3.addImage(shrub3Img);
    shrub3.scale = 0.05;
    shrub3.velocityX = -6;
    shrub3.lifetime = 500;
    var rand = Math.round(random(1,9));

    shrub3Group.add(shrub3);
  }
}