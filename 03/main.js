"use strict";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

let score = [0, 0];
let playerActive = 0;
let playerCurrentScore = 0;
let playerWin = true;

const switchPlayer = function () {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  playerCurrentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
btnRoll.addEventListener("click", function () {
  if (playerWin) {
    const randNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randNumber}.png`;

    if (randNumber !== 1) {
      playerCurrentScore += randNumber;
      document.getElementById(`current--${playerActive}`).textContent =
        playerCurrentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playerWin) {
    score[playerActive] += playerCurrentScore;
    document.getElementById(`score--${playerActive}`).textContent =
      score[playerActive];
    document.getElementById(`current--${playerActive}`).textContent = 0;
    playerCurrentScore = 0;

    if (score[playerActive] >= 20) {
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
      playerWin = false;
    }

    //switch player
    switchPlayer();
  }
});
