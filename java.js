const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');

let isJumping = false;
let gravity = 0.9;
let speed = 0;
let scoreValue = 0;
let highScoreValue = 0;

function jump() {
  if (isJumping) return;
  isJumping = true;
  speed = 15;
}

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    jump();
  }
});

function updateScore() {
  scoreValue++;
  score.textContent = scoreValue;
  
  if (scoreValue > highScoreValue) {
    highScoreValue = scoreValue;
    high
  }
}