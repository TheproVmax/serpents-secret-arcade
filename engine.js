// Screen switch
const startBtn = document.getElementById("startBtn");
const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");

startBtn.addEventListener("click", () => {
  titleScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

// Health system
let playerMaxHP = 100;
let playerHP = 100;

const healthBar = document.getElementById("player-health-bar");
const healthText = document.getElementById("health-text");

function updateHealth() {
  const percent = Math.max(playerHP, 0) / playerMaxHP * 100;
  healthBar.style.width = percent + "%";
  healthText.textContent = `${playerHP} / ${playerMaxHP}`;
}

function takeDamage(amount) {
  playerHP -= amount;
  if (playerHP < 0) playerHP = 0;
  updateHealth();
}

function heal(amount) {
  playerHP += amount;
  if (playerHP > playerMaxHP) playerHP = playerMaxHP;
  updateHealth();
}

updateHealth();
