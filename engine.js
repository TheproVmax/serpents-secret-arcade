console.log("script.js loaded");

function openGames() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("games").classList.add("active");
}

function goHome() {
  document.getElementById("games").classList.remove("active");
  document.getElementById("home").classList.add("active");
}
