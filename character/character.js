const startingLevel = 5;
const startingHealth = 100;
const attackDamage = 20;

const levelDisplay = document.querySelector("#level");
const healthDisplay = document.querySelector("#health");
const attackButton = document.querySelector("#attackButton");
const levelButton = document.querySelector("#levelButton");

let level = startingLevel;
let health = startingHealth;

function updateStats() {
    levelDisplay.textContent = level;
    healthDisplay.textContent = health;
}

attackButton.addEventListener("click", () => {
    health = Math.max(0, health - attackDamage);
    updateStats();

    if (health === 0) {
        window.alert("Character Died");
        window.location.reload();
    }
});

levelButton.addEventListener("click", () => {
    level += 1;
    updateStats();
});

updateStats();