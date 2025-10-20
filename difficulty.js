const stories = {
  easyTitles: ["The Lost Puppy", "A Rainy Day"],
  mediumTitles: ["The Forgotten Notebook", "The Market Adventure"],
  hardTitles: ["The Time Traveler’s Letter", "The Last Train Home"],
};

let prompt = document.querySelector("#prompt");

export function checkDifficulty() {
  const difficultySelected = document.querySelector("#difficulty").value;
  let storyTitleDisplay;
  const title = document.querySelector("#title");

  switch (difficultySelected) {
    case "easy":
      storyTitleDisplay = stories.easyTitles[Math.floor(Math.random() * 2)];
      title.textContent = storyTitleDisplay;

      if (storyTitleDisplay === stories.easyTitles[0]) {
        prompt.textContent = `
          One sunny morning, Mia found a small puppy near her house. The puppy was hungry and shaking. Mia gave it some milk and wrapped it in a soft towel. She looked for its owner and soon found a boy who was crying. When the boy saw the puppy, he smiled and thanked Mia. From that day, they became good friends.
        `;
      } else {
        prompt.textContent = `
          It was raining all morning, so Leo stayed inside. He read his favorite book and listened to the sound of the rain. When the rain stopped, he went outside and saw a rainbow in the sky. It was the most beautiful rainbow he had ever seen.
        `;
      }

      break;

    case "medium":
      storyTitleDisplay = stories.mediumTitles[Math.floor(Math.random() * 2)];
      title.textContent = storyTitleDisplay;

      if (storyTitleDisplay === stories.mediumTitles[0]) {
        prompt.textContent = `
            Anna was walking to school when she realized she left her notebook at home. It had all her homework in it! She ran back quickly, but when she arrived, her little brother was coloring on one of the pages. Anna sighed but smiled. Instead of getting angry, she helped him finish his drawing before rushing back to class—just in time for the bell.
          `;
      } else {
        prompt.textContent = `
            On Saturday morning, Carlo went to the town market with his grandmother. The market was full of colors, smells, and people shouting prices. Carlo helped carry the fruits and vegetables they bought. When they got home, his grandmother made a delicious soup, and Carlo felt proud for helping.
          `;
      }

      break;
    case "hard":
      storyTitleDisplay = stories.hardTitles[Math.floor(Math.random() * 2)];
      title.textContent = storyTitleDisplay;

      if (storyTitleDisplay === stories.hardTitles[0]) {
        prompt.textContent = `
            When Emma opened the old chest in her attic, she discovered a dusty envelope addressed to her—dated 50 years in the future. Inside was a letter describing her own inventions that would one day change the world. Confused yet inspired, Emma decided to study harder and pursue science, determined to make the letter come true.
          `;
      } else {
        prompt.textContent = `
           The station clock struck midnight as Jacob waited for the last train. The fog was thick, and the platform was silent except for the faint sound of rails humming in the distance. He felt uneasy—until he noticed a small child asleep on a bench. Instead of boarding the train, Jacob stayed to make sure the child was safe, missing his ride but gaining something far more meaningful.
          `;
      }

      break;

    default:
      break;
  }
}
