// Your code here
// Get DOM elements
const characterBar = document.getElementById("character-bar");
const characterInfo = document.querySelector(".characterInfo");
const detailedInfo = document.getElementById("detailed-info");
const nameEl = document.getElementById("name");
const imageEl = document.getElementById("image");
const voteCountEl = document.getElementById("vote-count");
const votesForm = document.getElementById("votes-form");
const votesInput = document.getElementById("votes");
const resetBtn = document.getElementById("reset-btn");

// Get character data from server and populate character bar
fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const nameSpan = document.createElement("span");
      nameSpan.textContent = character.name;
      nameSpan.addEventListener("click", () => {
        displayCharacter(character);
      });
      characterBar.appendChild(nameSpan);
    });
  });

// Display character details
function displayCharacter(character) {
  nameEl.textContent = character.name;
  imageEl.src = character.image;
  imageEl.alt = character.name;
  voteCountEl.textContent = character.votes;
  detailedInfo.style.display = "block";
}

// Handle vote submission
votesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const votes = parseInt(votesInput.value);
  voteCountEl.textContent = parseInt(voteCountEl.textContent) + votes;
});
 // Handle vote reset
resetBtn.addEventListener("click", () => {
  voteCountEl.textContent = 0;
});