'use strict';

let player1ScoreDisplay = document.querySelector('#score--0');
let player2ScoreDisplay = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let rollDiceBtn = document.querySelector('.btn--roll');
let player01 = document.querySelector('.player--0');
let player02 = document.querySelector('.player--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player01.classList.toggle('player--active');
  player02.classList.toggle('player--active');
};

dice.classList.add('hide');
player1ScoreDisplay.innerHTML = 0;
player2ScoreDisplay.innerHTML = 0;

rollDiceBtn.addEventListener('click', function () {
  function getRandomNumber() {
    // Generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
  }
  const randomNumber = getRandomNumber();

  dice.classList.remove('hide');
  // Update the src attribute of the dice image based on the random number
  dice.src = `dice-${randomNumber}.png`;
  dice.alt = `Dice ${randomNumber}`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

console.log('current score Out', currentScore);

btnHold.addEventListener('click', function () {
  //adding current score to saved score

  score[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  switchPlayer();
});
