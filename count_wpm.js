export function countWpm(duration) {
    const typingInputValue = document.querySelector("#typingInput").value.trim();
    const userWords = typingInputValue.split(/\s+/).filter(word => word.length > 0);

    //number of words user typed
    const userTotalWords = userWords.length;

    const timeInminutes = duration/60

    const userWpm = timeInminutes > 0? userTotalWords/ timeInminutes: 0;

    document.querySelector("#wpm").textContent = userWpm.toFixed(1);
}