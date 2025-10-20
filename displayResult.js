export function displayResult() {
  const typingInputValue = document.querySelector("#typingInput").value.trim();
  const typingInput = document.querySelector("#typingInput").value.trim();
  const characters = typingInput.length;
  const chars = document.querySelector("#chars");
  const userWords = typingInputValue
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const numberOfUserWords = userWords.length;
  const words = document.querySelector("#words");
  const promptValue = document.querySelector("#prompt").textContent;
  const promptWords = promptValue
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const wordsToCompare = promptWords.slice(0, numberOfUserWords);
  let score = 0;

  for (let i = 0; i < wordsToCompare.length; i++) {
    if (wordsToCompare[i] === userWords[i]) {
      score++;
    }
  }

  const numberOfCorrectWords = score;
  const correctWords = document.querySelector("#correctWords");
  const numberOfIncorrectWords = wordsToCompare.length - score;
  const incorrectWords = document.querySelector("#incorrectWords");

  chars.textContent = characters;
  words.textContent = numberOfUserWords;
  correctWords.textContent = numberOfCorrectWords;
  incorrectWords.textContent = numberOfIncorrectWords;
}
