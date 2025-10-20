import { countWpm } from "./count_wpm.js";
import { checkAccuracy } from "./accuracy.js";
import { displayResult } from "./displayResult.js";

let timerId = null;
const typingInput = document.querySelector("#typingInput");
const wpm = document.querySelector("#wpm");
const accuracy = document.querySelector("#accuracy");
const difficulty = document.querySelector("#difficulty");

export function startTimer() {
  if (timerId) return; // do nothing if timer is already running
  typingInput.disabled = false;

  const timeDisplay = document.querySelector("#time");
  let duration = Number(document.querySelector("#duration").value);
  let remaining = duration;

  timeDisplay.textContent = remaining + "s";

  timerId = setInterval(() => {
    if (remaining <= 0) {
      stopTimer();
      timeDisplay.textContent = "0s"; //ensure stops at zero
      typingInput.disabled = true;
      countWpm(duration);
      checkAccuracy();
      alert("time's up!");
      return;
    }

    remaining--; //decrease by 1
    timeDisplay.textContent = remaining + "s"; // show current time
  }, 1000);
}

export function reset() {
  const timeDisplay = document.querySelector("#time");
  const duration = document.querySelector("#duration").value;
  stopTimer();

  //reset display and input
  typingInput.value = "";
  typingInput.disabled = true;
  timeDisplay.textContent = duration + "s"; //return to the starting count
  wpm.textContent = 0;
  accuracy.textContent = "--%";
  document.querySelector("#chars").textContent = "0";
  document.querySelector("#words").textContent = "0";
  document.querySelector("#correctWords").textContent = "0";
  document.querySelector("#incorrectWords").textContent = "0";
}

export function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  difficulty.disabled = false;
  displayResult();
}
