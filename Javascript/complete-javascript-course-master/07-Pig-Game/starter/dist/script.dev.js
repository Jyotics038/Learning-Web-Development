'use strict'; //Selecting elements

var score0El = document.querySelector('#score--0');
var score1El = document.getElementById('score--1');
var current0El = document.getElementById('current--0');
var current1El = document.getElementById('current--1');
var diceEl = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var player0El = document.querySelector('.player--0');
var player1El = document.querySelector('.player--1');
var score, currentScore, activePlayer, playing; //Starting conditions

var init = function init() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden'); // score0El.textContent=0;
  //  score1El.textContent=0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

var switchPlayer = function switchPlayer() {
  document.getElementById("current--".concat(activePlayer)).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}; //Rolling dice functionality


btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll
    var dice = Math.trunc(Math.random() * 6) + 1; //2.display dice

    diceEl.classList.remove('hidden');
    diceEl.src = "dice-".concat(dice, ".png"); //3.check for rolled 1:if true,switch to next player

    if (dice !== 1) {
      //Add dice to current Score
      currentScore += dice;
      document.getElementById("current--".concat(activePlayer)).textContent = currentScore; //current0El.textContent = currentScore; //changes later
    } else {
      //Switch to next Player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    score[activePlayer] += currentScore; //score[1]=score[1]+currentScore;

    document.getElementById("score--".concat(activePlayer)).textContent = score[activePlayer]; //2.Check if player's score is >=100

    if (score[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(".player--".concat(activePlayer)).classList.add('player--winner');
      document.querySelector(".player--".concat(activePlayer)).classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  init;
});
//# sourceMappingURL=script.dev.js.map
