
export function checkAccuracy() {
    const wordsPrompt = document.querySelector("#prompt").textContent;
    const words = wordsPrompt.split(/\s+/).map(word => word.trim()).filter(word => word !== "");

    const wordUser = document.querySelector("#typingInput").value.trim();
    const userWords = wordUser.split(/\s+/).filter(word => word.length > 0);
    const totalUserWords = userWords.length;
    const wordsToCompare = words.slice(0, totalUserWords);
    const accuracy = document.querySelector("#accuracy");

    let score = 0;

    for (let i = 0; i < wordsToCompare.length; i++) {
        if(wordsToCompare[i] === userWords[i]){
            score++;
        }
        
    }

    let accuracyRate = (score/ wordsToCompare.length) * 100;

    accuracy.textContent = accuracyRate.toFixed(2) + "%";

} 