'use strict';
// problems
// 1. understand the problem
// 2. hardcode the Game
// 3. check random Number
// 4. score
// 5. high score
// 6. only try 5 times
// 7. try again
// 8. Bg green

// console.log(firstQuery);
// // document.querySelector('.message').textContent = 'Ramki';
// console.log((firstQuery = 'ramki'));

// const crtNumber = (document.querySelector('.number').textContent =
//   Math.floor(Math.random() * 20) + 1);

// Variable diclare
let crtNumber = Math.floor(Math.random() * 20) + 1;
console.log(crtNumber);
let msgContent = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let checkInput = document.querySelector('.guess');

// Game Function
document.querySelector('.check').addEventListener('click', function () {
  let checkInput = document.querySelector('.guess').value;
  console.log('score', score);
  let highscoreValue = highscore.textContent;
  let scoreValue = score.textContent;
  console.log('scoreValue', scoreValue);
  console.log('highscoreValue', highscoreValue);

  if (score.textContent >= 1) {
    if (checkInput < crtNumber) {
      msgContent.textContent = 'Your Number is Too Low 📉, Try Again!';
      score.textContent--;
    } else if (checkInput > crtNumber) {
      score.textContent--;
      msgContent.textContent = 'Your Number is Too High 📈, Try Again!';
    } else if (checkInput == crtNumber) {
      document.querySelector('.number').textContent = crtNumber;
      document.body.style.backgroundColor = 'green';
      highscore.textContent = scoreValue;
      console.log('refined High score', highscoreValue);
      msgContent.textContent = 'Correct!!!✅';
    } else {
      score.textContent--;
      msgContent.textContent = 'wrong!!✅';
    }
  } else {
    document.body.style.backgroundColor = 'red';
    msgContent.textContent = 'Game Over';
    checkInput.value = ' ';
  }
});

// Reset Game
document.querySelector('.again').addEventListener('click', function () {
  score.textContent = 5;
  msgContent.textContent = 'Start guessing...';
  checkInput.value = ' ';
  document.body.style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  crtNumber = Math.floor(Math.random() * 20) + 1;
  console.log(crtNumber);
});
