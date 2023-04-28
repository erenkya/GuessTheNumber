'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number..!!!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    if (!score > 0) {
      document.querySelector('.message').textContent = 'You Losed!';
    } else {
      document.querySelector('.message').textContent = 'Correct Number..!!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Losed!';
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Losed!';
    }
    document.querySelector('.score').textContent = score;
  }
});
