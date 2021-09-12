'use strict';

//Select all elements ;

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions ;
const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

//Rolling the dice ;

btnRoll.addEventListener('click', function () {
  //Generate a random number from 1 to 6 ;
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display the dice;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //Check if rolled 1 , if not ;
  if (diceEl !== 1) {
    //Add dice to current score ;
    currentScore += dice;
    current0.textContent = currentScore;
    // if true switch to next player
  }
});
