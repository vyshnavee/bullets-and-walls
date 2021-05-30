var bullet,wall;
var speed,weight,thickness,hasCollided;




function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80) ;
  thickness=random(22,83);
  createCanvas(1600,400);
 
}

function draw() {
  background(1600,400); 
 //hasCollided(); 
  drawSprites();
  



function hasCollided(lbullet,lwall ){
bulletRightEdge= lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
 return true 
}
return false;
}  
    

    if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage = 0.5 * weight * speed* speed  /(thickness*thickness*thickness)
}
if (damage>10){
 wall.shapeColor=color(255,0,0);
}

if(damage<10){
 wall.shapeColor=color(0,255,0);
}


}
 
 
 