var score=0
function preload(){
  playerimg=loadImage("character.png")
  finishimg=loadImage("finish line.png")
  bg=loadImage("bg.png")
  appleimg = loadImage("apple.png")
  grapeimg = loadImage("grapes.png")
  kiwiimg = loadImage("kiwi.png")
  lemonimg =loadImage("lemon.png")
  orangeimg = loadImage("orange.png")
  enemyimg = loadImage("enemy.png")
  
}

function setup() {
  createCanvas(800,400);
  
  player = createSprite(30, 30, 50, 50);
  player.addImage(playerimg)
  player.scale=0.02

  edges=createEdgeSprites()

  fruitg=createGroup()


  wall1 =  createSprite(85, 35, 10, 70);
  wall2 =  createSprite(45, 155, 90, 10);
  wall3 =  createSprite(170, 120, 10, 100);
  wall4 =  createSprite(77, 280, 10, 100);
  wall5 =  createSprite(470, 325, 650, 10);
  wall6 =  createSprite(350, 80, 200, 10);
  wall7 =  createSprite(250, 250, 200, 10);
  wall8 =  createSprite(350, 205, 10, 100);
  wall9 =  createSprite(500, 156, 150, 10);
  wall10 =  createSprite(450, 275, 10, 100);
  wall11 =  createSprite(540, 40, 10, 80);
  wall12 =  createSprite(660, 75, 100, 10);
  wall13 =  createSprite(650, 200, 10, 100);
  wall14 =  createSprite(765, 200, 90, 10);

  fruit1 = createSprite(165,27,5,5)
  fruit1.addImage(appleimg)
  fruit1.scale = 0.15

  fruit2 = createSprite(278,127,5,5)
  fruit2.addImage(grapeimg)
  fruit2.scale = 0.3

  fruit3 = createSprite(660,35,5,5)
  fruit3.addImage(kiwiimg)
  fruit3.scale = 0.15

  fruit4 = createSprite(345,285,5,5)
  fruit4.addImage(lemonimg)
  fruit4.scale = 0.3 

  fruit5 = createSprite(650,285,5,5)
  fruit5.addImage(orangeimg)
  fruit5.scale = 0.3
  
  fruit6 = createSprite(35,355,5,5)
  fruit6.addImage(grapeimg)
  fruit6.scale = 0.3

  fruitg.add(fruit1)
  fruitg.add(fruit2)
  fruitg.add(fruit3)
  fruitg.add(fruit4)
  fruitg.add(fruit5)
  fruitg.add(fruit6)
  
  enemy1= createSprite(510,118,5,5)
  enemy1.addImage(enemyimg)
  enemy1.scale = 0.1
  
  enemy2= createSprite(32,243,5,5)
  enemy2.addImage(enemyimg)
  enemy2.scale = 0.1
  
  enemy3= createSprite(217,215,5,5)
  enemy3.addImage(enemyimg)
  enemy3.scale = 0.1

  finishline = createSprite(755,370,10,10)
  finishline.addImage(finishimg)
  finishline.scale=0.4
}

function draw() {
  background(bg); 
  text(mouseX + ","+ mouseY,mouseX,mouseY) 
  fill("black")
  textSize(15)
  text("Score: "+score,700,23)
  player.velocityY=0
  player.velocityX=0

  if(keyDown("up")){
    player.velocityY=-4
  }
  
  if(keyDown("down")){
    player.velocityY=4
  }
  
  if(keyDown("left")){
    player.velocityX=-4
  }
  
  if(keyDown("right")){
    player.velocityX=4
  }

  if(player.isTouching(fruit1)){
    fruit1.destroy()
    score=score+5
  }

  if(player.isTouching(fruit2)){
    fruit2.destroy()
    score=score+5
  }

  if(player.isTouching(fruit3)){
    fruit3.destroy()
    score=score+5
  }

  if(player.isTouching(fruit4)){
    fruit4.destroy()
    score=score+5
  }

  if(player.isTouching(fruit5)){
    fruit5.destroy()
    score=score+5
  }
  if(player.isTouching(fruit6)){
    fruit6.destroy()
    score=score+5
  }

if(player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy3)) {
  player.x=30
  player.y=30
}

drawSprites();

if(!fruitg[0]&&player.isTouching(finishline)) {
  textSize(30)
 fill("green")
  text("You Win!",400,200)
  player.velocityX = 0
  player.velocityY = 0
}

  player.collide(edges)
  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  
  
  
}