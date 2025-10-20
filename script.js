import { startTimer, stopTimer } from "./timer.js";

//store words and its total
const promptElement = document.getElementById("prompt");
const words = promptElement.textContent
  .split(/\s+/)
  .map((word) => word.trim())
  .filter((word) => word !== "");
const totalWords = words.length;
const typingInput = document.querySelector("#typingInput");
typingInput.disabled = true;

const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", () => {
  startTimer();
});

resetBtn.addEventListener("click", () => {
    stopTimer();
})
