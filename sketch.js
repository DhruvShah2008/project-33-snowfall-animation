var backgroundImg,background;
var snowImg,snow

function reload(){
backgroundImg = loadImage("snow3.jpg")
snowImg = loadImage("snow5.png")
}

function setup() {
  createCanvas(800,400);

  background = createSprite(400, 200, 800, 400);
  background.addImage("snow3.jpg")

  snow = createSprite(400,200,50,50);
  snow.addImage("snow5.png")


}

function draw() {
  background(255,255,255);  

  drawSprites();
}