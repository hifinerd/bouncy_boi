var player, enemy, gamestate = 0, enemyGroup, score = 0, chain = 0

function setup() {
  createCanvas(600,800);
  player = createSprite(300, 100, 40, 40);
  gamestate = 0
  enemyGroup = new Group()
}

function draw() {
  background(0);
  text("Score: "+score, 25, 25)
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 8
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 8
  } 
  if(keyDown(32)){
    gamestate = 1
  }
  if(gamestate === 1){
  player.velocityY = player.velocityY + 0.3
  }
  if(player.y > 800){
    gamestate = 0
    player.y = 100
    player.x = 300
    player.velocityY = 0
    chain = 0
  }
  spawnAliens()
  drawSprites();
  for(var i=0;i<enemyGroup.length;i++){
    if(enemyGroup[i].isTouching(player)){
      player.velocityY = -15
      enemyGroup[i].destroy();
      score = score + 1 * chain
      chain = chain + 1
    }
  }
}
function spawnAliens(){
  if (frameCount % 45 === 0){
    var randX = Math.round(random(1,15))
    var randY = Math.round(random(400,800))
    enemy = createSprite(0, randY, 25, 25)
    enemy.velocityX = randX
    enemyGroup.add(enemy)
    enemy.lifetime = 500
    

  }
}