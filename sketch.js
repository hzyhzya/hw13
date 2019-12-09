var ballx = 250;
var bally = 250;
var ballSize = 40;
var score = 0;
var gameState = "1";
var mySound;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("01.mp3");
}

function setup() {
  createCanvas(500, 500);
  colorMode(RGB);
  textSize(12);
}

function draw() {
  background(230, 230, 250);
  if (gameState == "1") {
    A();
  }
  if (gameState == "2") {
    B();
  }
  if (gameState == "3") {
    C();
  }
  if (gameState == "4") {
    D();
  }
    text(("Score:" + score), 235, 20);
}

function A() {
  text("Easy", width / 2, height - 15);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    mySound.play();
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
  }
  if (score >= 10) {
    gameState = "2"
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}

function B() {
  background(255, 220, 220);
  text("Normal", width / 2, height - 15);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    mySound.play();
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
  }
  if (score >= 20) {
    gameState = "3"
  }
  ellipse(ballx, bally, ballSize, ballSize);
}

function C() {
  background(254, 255, 194);
  text("Hard", width / 2, height - 15);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    mySound.play();
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
  }
  if (ballSize <= 0) {
    gameState = "4"
  }
  ellipse(ballx, bally, ballSize, ballSize);
}

function D() {
  text("YOU WIN!!", 240, height / 2);
}
