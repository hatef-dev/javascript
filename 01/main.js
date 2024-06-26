"use strict";
const checkBtn = document.querySelector(".check");
const showCorrectNumber = document.querySelector(".number");
const showScore = document.querySelector(".score");
const message = document.querySelector(".message");
const againBtn = document.querySelector(".again");
let score = 20;
let inputNumber = null;
let hightScore = 0;
const randNumber = Math.trunc(Math.random() * 20 + 1);

const eventsHandelr = function () {
  inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    message.textContent = "Give me Some Fucking Number";
  } else if (randNumber === inputNumber) {
    message.textContent = "Correct answer!!!";
    showCorrectNumber.textContent = randNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    console.log(score)
    showCorrectNumber.style.width = "30rem";
    if (score > hightScore) {
      hightScore = score
      document.querySelector(".highscore").textContent = hightScore;
      
    }
  } 
  else if (randNumber !== inputNumber){
    if (score > 0) {
        message.textContent = randNumber > inputNumber ? 'Too Low' : 'Too High';
        score--;
        showScore.textContent = score;
      }
  }
};
console.log(randNumber);
againBtn.addEventListener("click", () => {
  score = 20;
  showCorrectNumber.textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  showCorrectNumber.style.width = "15rem";
  showScore.textContent = "20";
});
checkBtn.addEventListener("click", eventsHandelr);
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    eventsHandelr();
  }
});
