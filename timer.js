import { countWpm } from "./count_wpm.js";
import { checkAccuracy } from "./accuracy.js";

let timerId = null;
const typingInput = document.querySelector("#typingInput");

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

export function resetTimer() {
  const timeDisplay = document.querySelector("#time");
  const duration = document.querySelector("#duration").value;
  stopTimer();

  //reset display and input
  typingInput.value = "";
  typingInput.disabled = true;
  timeDisplay.textContent = duration + "s"; //return to the starting count
}

export function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}