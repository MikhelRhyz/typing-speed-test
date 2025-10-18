import { startTimer } from "./timer.js";

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

startBtn.addEventListener("click", () => {
  startTimer();
});


