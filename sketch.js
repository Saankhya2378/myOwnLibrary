var fixedRect, movingRect;
var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  sprite1 = createSprite(100, 400, 50, 80);
  sprite1.shapeColor = "green";
  sprite2 = createSprite(800, 400, 80, 30);
  sprite2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  sprite1.velocityX = 5;
  sprite2.velocityX = -5;
}

function draw() {
  background(0,0,0);  


  bounceOff(movingRect, fixedRect);
  bounceOff(sprite1, sprite2);

  drawSprites();
}

