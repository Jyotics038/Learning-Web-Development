'use strict'; // console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;

var displayMessage = function displayMessage(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, _typeof(guess));

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //when guess is wrong
  else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? 'Too High!' : 'Too Low!';
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You Lost the Game!');
        document.querySelector('.score').textContent = 0;
      }
    }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//# sourceMappingURL=script.dev.js.map
