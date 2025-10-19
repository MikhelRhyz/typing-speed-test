import { startTimer, resetTimer} from "./timer.js";

const typingInput = document.querySelector("#typingInput");
typingInput.disabled = true;
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", () => {
  startTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
})
  