var fish,fishImg;
var mar, marImg;
var botellaImg,algaImg,bolsaImg
var bolsa,botella,alga
var bolsaGroup,algasGroup,botellaGroup
var life =3
var corazon1,corazon1Img,corazon2,corazon2Img,corazon3,corazon3Img


function preload() {
  fishImg = loadImage("imagenes/clown-fish.png");
  marImg = loadImage("imagenes/mar.jpg");
  botellaImg = loadImage("imagenes/plastic-bottle.png");
  algaImg = loadImage("imagenes/seaweed.png");
  bolsaImg = loadImage("imagenes/bag.png");
  corazon1Img = loadImage("imagenes/heart_1.png")
  corazon2Img = loadImage("imagenes/heart_2.png")
  corazon3Img = loadImage("imagenes/heart_3.png")
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  mar = createSprite(1000,300,);
  mar.addImage(marImg);
  mar.scale = 0.7

  corazon1 = createSprite(displayWidth, 100,300,20,20);
  corazon1.addImage("corazon1",corazon1Img);
  corazon1.visible = false
  corazon1.scale = 0.4

  corazon2 = createSprite(displayWidth,950,300,20,20);
  corazon2.addImage("corazon2",corazon2Img);
  corazon2.visible = false
  corazon2.scale = 0.4

  corazon3  = createSprite(displayWidth,100,300,20,20);
  corazon3.addImage("corazon3",corazon3Img);

  corazon3.scale = 0.4
  
  fish = createSprite(200,500);
  fish.addImage(fishImg);
  fish.scale = .4

  

  algasGroup = new Group()
  bolsaGroup = new Group()
  botellaGroup = new Group()

}

function draw() {
  background("black")
  

  if (keyDown("right")) {
    fish.velocityX = fish.velocityX +2
    
  }
  if (keyDown("left")) {
    fish.velocityX = fish.velocityX -2
    
  }
  if (keyDown("down")) {
    fish.velocityY = fish.velocityY +2
    
  }
  if (keyDown("up")) {
    fish.velocityY = fish.velocityY -2
    
  }

  if (bolsaGroup.isTouching(fish)|| botellaGroup.isTouching(fish)|| algasGroup.isTouching(fish)|| fish.isTouching(bolsaGroup)) {
    fish.destroy()
    
  }

  
  alga1();
  bolsa1();
  botella1();
  drawSprites();
}
function alga1() {
  if (frameCount%250===1) {

    alga = createSprite(random(2700,2700),random(100,800),40,40);
    alga.addImage(algaImg);
    alga.scale = .4
    alga.velocityX = -3
    alga.setCollider("rectangle",0,0,400,400);
    
    alga.lifetime = 1000
    algasGroup.add(alga);

    
  }

  
}
function botella1() {
  if (frameCount%250===1) {

    botella = createSprite(random(2100,2100),random(100,900),40,40);
    botella.addImage(botellaImg);
    botella.scale =.4
    botella.velocityX = -3
    botella.setCollider("rectangle",0,0,400,400);
    
    
    botella.lifetime = 1000
    botellaGroup.add(botella);
    
    
  }

  
}
function bolsa1() {
  if (frameCount%300===1) {

    bolsa = createSprite(random(2400,2400),random(100,1000),40,40);
    bolsa.addImage(bolsaImg);
    bolsa.scale =0.4
    bolsa.velocityX = -3
    bolsa.setCollider("rectangle",0,0,400,400);
    
    
    bolsa.lifetime = 1000
    bolsaGroup.add(bolsa);
    
    
  }

  
}