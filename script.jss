// =======================
// CLICK COUNTER APP
// =======================

// Elements
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");
const countText = document.getElementById("count");
const bestText = document.getElementById("best");
const message = document.getElementById("message");

// Load Saved Data
let count = Number(localStorage.getItem("count")) || 0;
let best = Number(localStorage.getItem("best")) || 0;

// Update Screen
function updateUI() {
    countText.textContent = count;
    bestText.textContent = best;
}

updateUI();

// Click Button
clickBtn.addEventListener("click", () => {

    count++;

    // Best Score
    if (count > best) {
       
