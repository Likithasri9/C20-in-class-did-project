var fixedrect;
var movingrect;
var game1,game2,game3;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(250,300,40,30);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(350,400,40,30);
  movingrect.shapeColor = "green";
  game1 = createSprite(400,250,40,30);
  game1.shapeColor = "red";
  game2 = createSprite(300,250,40,30);
  game2.shapeColor = "red";
  game3 = createSprite(200,250,40,30);
  game3.shapeColor = "red";
}

function draw() {
  background(0);
  movingrect.x = mouseX ;
  movingrect.y = mouseY ;
  //console.log("x",movingrect.x - fixedrect.x );
  //console.log("width",fixedrect.width/2+movingrect.width/2);
  if(isTouching(movingrect,game2)){
  game2.shapeColor ="blue";
  movingrect.shapeColor = "blue";
  }else{
  game2.shapeColor ="red";
  movingrect.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}else{
  return false
 }
}