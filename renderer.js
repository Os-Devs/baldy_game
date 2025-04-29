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
  
  function showMenu(menu) {
    const content = document.getElementById("menu-content");
    content.innerHTML = "";
  
    if (menu === "inventory") {
      const ul = document.createElement("ul");
      player.inventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      content.appendChild(ul);
    } else if (menu === "stats") {
      for (let stat in player.stats) {
        const p = document.createElement("p");
        p.textContent = `${stat}: ${player.stats[stat]}`;
        content.appendChild(p);
      }
    } else if (menu === "quests") {
      const ul = document.createElement("ul");
      player.quests.forEach(quest => {
        const li = document.createElement("li");
        li.textContent = quest;
        ul.appendChild(li);
      });
      content.appendChild(ul);
    }
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
  
  window.onload = () => {
    loadChoices();
    showMenu("inventory"); // Default sidebar view
  };
  