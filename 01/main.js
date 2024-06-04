"use strict";
const checkBtn = document.querySelector(".check");
const showCorrectNumber = document.querySelector('.number')
const showScore = document.querySelector(".score");
const message = document.querySelector(".message");

let score = 20;
let inputNumber = null;
const randNumber = Math.trunc(Math.random() * 20 + 1);

const eventsHandelr = function () {
  inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    message.textContent = "Give me Some Fucking Number";
  } else if (randNumber === inputNumber) {
    message.textContent = "Correct answer!!!";
    showCorrectNumber.textContent = randNumber
    document.querySelector("body").style.backgroundColor = "#60b347"
    showCorrectNumber.style.width = '30rem'
  } else if (randNumber > inputNumber) {
    message.textContent = "Too Low";
    score--;
    showScore.textContent = score;
  } else if (randNumber < inputNumber) {
    message.textContent = "Too High";
    score--;
    showScore.textContent = score;
  }
};
console.log(randNumber);
checkBtn.addEventListener("click", eventsHandelr);
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    eventsHandelr();
  }
});
