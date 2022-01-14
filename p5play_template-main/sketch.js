
var caixa
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30);
}

function draw() 
{
  background(81,255,255);
drawSprites()

if(keyIsDown(RIGHT_ARROW))
{
  caixa.position.x = caixa.position.x +5;
}
if(keyIsDown(LEFT_ARROW))
{
  caixa.position.x = caixa.position.x -5;
}
if(keyIsDown(DOWN_ARROW))
{
  caixa.position.y = caixa.position.y +5;
}
if(keyIsDown(UP_ARROW))
{
  caixa.position.y = caixa.position.y -5;
}
}




