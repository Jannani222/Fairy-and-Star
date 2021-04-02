var night,nightImg
var star,starImg
var fairy,fairyImg
var invisiblewall
var invisiblewall2
var music
function preload()
{
  nightImg=loadImage("images/starNight.png")
  starImg=loadImage("images/star.png")
  fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
  music=loadSound("sound/JoyMusic.mp3")
}

function setup()
{
createCanvas(700,700)
//night=createSprite(300,300,100,100)
//night.addImage("Night sky",nightImg)
//night.scale=0.1

music.play();

star=createSprite(565,30)
star.addImage("starglow",starImg)
star.scale=0.2

fairy=createSprite(100,500)
fairy.addAnimation("fairyfly",fairyImg)
fairy.scale=0.2

invisiblewall=createSprite(0,500,1400,20)
invisiblewall.visible=false;
invisiblewall2=createSprite(630,400,20,800)
invisiblewall2.visible=false;  
}

function draw()
{
  background(nightImg)
  
  if(keyDown("left"))
  {
      fairy.velocityX=-2
  }

  if(keyDown("right"))
  {
      fairy.velocityX=2
  }
  if(fairy.isTouching(invisiblewall2))
  {
    fairy.velocityX=0
    fairy.velocityY=0
    star.velocityY=2
  }

 if(star.isTouching(invisiblewall))
  {
      star.velocityY=0
  }
  
  drawSprites();
  textSize(10)
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}