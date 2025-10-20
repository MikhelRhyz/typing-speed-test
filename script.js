import { startTimer, resetTimer, stopTimer} from "./timer.js";
import { countWpm } from "./count_wpm.js";
import { checkAccuracy } from "./accuracy.js";

const typingInput = document.querySelector("#typingInput");
typingInput.disabled = true;
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
let startingTime = 0;

startBtn.addEventListener("click", () => {
  startingTime = Number(document.querySelector("#duration").value);
  startTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
})

typingInput.addEventListener("input", () => {
  const userInput = document.querySelector("#typingInput").value.trim();
  const userWords = userInput.split(/\s+/).filter(w => w.length > 0);
  const numberOfUserWords = userWords.length;
  const promptContent = document.querySelector("#prompt").textContent.trim();
  const promptWords = promptContent.split(/\s+/).filter(w => w.length > 0);
  const promptWordsCount = promptWords.length;

  if (
  promptWordsCount === numberOfUserWords &&
  (typingInput.value.endsWith(" ") || typingInput.value.trim() === promptContent)
) {
  typingInput.value = typingInput.value.trim(); // remove trailing space
  stopTimer();
  setTimeout(() => typingInput.disabled = true, 0);

  const duration = startingTime - Number(document.querySelector("#time").textContent.match(/\d+/));
  countWpm(duration);
  checkAccuracy();
}

})