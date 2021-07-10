var archer
var monster1, monster2, monster3, monster4, monster5
var arrow
var score
var archerImage, monsterImg, arrowImage

function preload() {
  arrowImage = loadImage("Images/Arrow.png");
  monsterImg = loadImage("Images/Monster.gif");
  archerImage = loadImage("Images/Archer.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  monster1 = new Monsters(width-30)
  monster1.body.addImage(monsterImg);
  monster1.body.scale = 0.2;
  
  monster2 = new Monsters(170)
  //monster2.body.addImage(monsterImg);
  monster2.body.scale = 0.2;
  
  monster3 = new Monsters(width-250);
  monster3.body.addImage(monsterImg);
  monster3.body.scale = 0.2;
  
  monster4 = new Monsters(width-350)
  monster4.body.addImage(monsterImg);
  monster4.body.scale = 0.2;
  
  monster5 = new Monsters(width-430)
  monster5.body.addImage(monsterImg);
  monster5.body.scale = 0.2;
  
  archer = createSprite(750,800)
  archer.addImage(archerImage);
  score = 0
  
}

function draw() {
  background(255,255,255); 
  monster1.display() 
  monster2.display()
  monster3.display()
  monster4.display()
  monster5.display()

  /*console.log(displayWidth, displayHeight);

  console.log(mouseX, mouseY);*/

  if (keyDown("LEFT_ARROW")){
    archer.x = archer.x -10
  }

  if (keyDown("RIGHT_ARROW")){
    archer.x = archer.x +10
  }

    createArrow();

 /*if (arrow.isTouching(monster.body)){
   monster.body.destroy();
    arrow.destroy();
    score=score+1
  } */

  drawSprites();
  text("Score: "+ score, 500,50);

}

function createArrow(){
  if(keyDown("space")){
    arrow= createSprite(archer.x, archer.y, 30, 30);
    arrow.addImage(arrowImage);
    arrow.x = archer.x;
    arrow.velocityY = -25
    arrow.lifetime = 150;
    arrow.scale = 0.4;
  }
}
