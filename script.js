'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const decreaseScore = () => {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '😞You lost the game!';
    document.querySelector('.score').textContent = '0';
  }

  return score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🔴 No number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When number is greater than secret number
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️Too low');
    decreaseScore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
