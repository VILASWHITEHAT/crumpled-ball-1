var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  
  bullet = createSprite(200, 200, 40, 15);
  bullet.velocityX = 10;
  wall = createSprite(1200, 200, thickness, height/2);
 

}

function draw() {
  background(80, 80, 80);  
  
if(hasColided(bullet, wall)){
bullet.velocityX = 0;
var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
console.log(damage);
if(damage > 10){
  wall.shapeColor = color(255, 0, 0);
}

if(damage < 10){
  wall.shapeColor = color(0, 255, 0);
}

}

  drawSprites();
}

function hasColided(Lbullet, Lwall){
bulletRightEdge = Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;

if(bulletRightEdge >= wallLeftEdge){
  return true
}

return false;

}