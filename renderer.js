// renderer.js
const { ipcRenderer } = require('electron');

const player = {
  health: 100,
  inventory: ["Sword", "Health Potion"],
  quests: ["Find the amulet"],
  stats: { strength: 5, agility: 3, intellect: 4 }
};

  function addStory(text) {
    const story = document.getElementById("story");
    story.innerText += `\n> ${text}`;
  }
  
  function loadChoices() {
    const choices = document.getElementById("choices");
    choices.innerHTML = "";
  
    const btn1 = document.createElement("button");
    btn1.textContent = "Explore the ruins";
    btn1.onclick = () => addStory("You enter the ruins and hear eerie whispers...");
  
    const btn2 = document.createElement("button");
    btn2.textContent = "Return to village";
    btn2.onclick = () => addStory("The village is quiet. Too quiet.");
  
    choices.appendChild(btn1);
    choices.appendChild(btn2);
  }

  function showMenu(menuType) {
    // Save player data to localStorage
    localStorage.setItem('playerData', JSON.stringify(player));
    // Send request to main process to open window
    ipcRenderer.send('open-menu', menuType);
  }
  
  window.onload = () => {
    loadChoices();
  };
  