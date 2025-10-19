let timerId = null;
const typingInput = document.querySelector("#typingInput");

export function startTimer() {
  if (timerId) return; // do nothing if timer is already running
  typingInput.disabled = false;

  let duration = Number(document.querySelector("#duration").value);
  const time = document.querySelector("#time");

  timerId = setInterval(() => {
    time.textContent = duration + "s"; // show current time

    if (duration <= 0) {
      clearInterval(timerId);
      timerId = null;
      time.textContent = "0s"; //ensure stops at zero
      alert("time's up!");
      typingInput.disabled = true;
      return;
    }

    duration--; //decrease by 1
  }, 1000);
}

export function resetTimer() {
  const time = document.querySelector("#time");
  const duration = document.querySelector("#duration").value;
  clearInterval(timerId);
  timerId = null;

  //reset display and input
  time.textContent = duration + "s"; //return to the starting count
  typingInput.disabled = true;
  typingInput.value = "";
}