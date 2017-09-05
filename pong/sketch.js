var rightPaddle_x;
var rightPaddle_y;
var leftPaddle_x;
var leftPaddle_y;
var ball_x;
var ball_y;
var ballDistX;
var ballDistY;
var points;

function setup() {
  createCanvas(700,400);
  rightPaddle_x = 680;
  leftPaddle_x = 0;
  rightPaddle_y= 150;
  leftPaddle_y = 150;
  ball_x = 350;
  ball_y = 200;
  ballDistX = 4;
  ballDistY = 4;
  points=0;
  gameOver=false
  
}

function draw() {
  background(0);
  createBall();
  moveBall();
 bounce();
  rightPaddle();
  leftPaddle();
  movePaddle();
  displayHits();
  endGame();
  if (gameOver == true){
   ball_x = 350;
   ball_y = 200;
   rightPaddle_x = 680;
  leftPaddle_x = 0;
  rightPaddle_y= 150;
  leftPaddle_y = 150;
   background('black')
    fill (255);
   textSize(50);
    text(points,450,250)
    fill (255);
   textSize(50);
    text('POINTS:',250,250)
   button = createButton('START OVER');
   button.position (300,150);
   button.mousePressed(restart);
  }
    
  
}
  
  
function rightPaddle(){
  fill(255);
  noStroke();
  rect(rightPaddle_x,rightPaddle_y,10,100);
}
  
function leftPaddle(){
  fill(255);
  noStroke();
  rect(leftPaddle_x,leftPaddle_y,10,100);
}

function movePaddle(){
 if(keyIsDown(UP_ARROW) && rightPaddle_y > 0)
    rightPaddle_y -= 4;
  if(keyIsDown(DOWN_ARROW) && rightPaddle_y < 300)
    rightPaddle_y += 4;
  if(keyIsDown(UP_ARROW) && leftPaddle_y > 0)
    leftPaddle_y -= 4;
 if(keyIsDown(DOWN_ARROW) && leftPaddle_y < 300)
    leftPaddle_y += 4;
}

function createBall(){
  fill(255);
  noStroke();
  ellipse(ball_x,ball_y,25,25);
}

function moveBall(){
  ball_x += ballDistX;
  ball_y += ballDistY;
}

function displayHits(){
  fill (160);
  textSize(150);
  text(points,550,375)
}
function bounce(){
  if (ball_x>rightPaddle_x-5 && ball_y>rightPaddle_y-20 && ball_y < rightPaddle_y+120){
    ballDistX = -4;
    points += 1;
    
  }
 if (ball_x<leftPaddle_x+15 && ball_y>leftPaddle_y-20 && ball_y < leftPaddle_y+120){
    ballDistX = 4;
    points +=1;
 }
 
 if (ball_y<=0){
  ballDistY = 4;
 }

  
  if (ball_y>=400){
  ballDistY = -4

  }
  
}
function endGame(){
  if (ball_x>rightPaddle_x){
    background('black');
     gameOver=true;
  }
  if (ball_x<leftPaddle_x){
    background('black');
     gameOver=true;
  }
}
  
function restart(){
  points = 0;
  removeElements();
  gameOver = false;
}

