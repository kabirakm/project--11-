
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1,ship-2,ship-3,ship-4");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,20)
  sea.addImage(seaImg)
  sea.velocityX = -2
  
  ship = createSprite(200,200,150,100)
  ship.addAnimation(shipImg1)
}

function draw() {
  background("blue");
  if(sea.x < 0 ){
    sea.x = sea.width/2;
  }
  
draw(sprites);
}
