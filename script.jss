const winScreen = document.getElementById("winScreen");
let clicks = 0;
const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");
const sound5 = document.getElementById("sound5");
const button = document.getElementById("clickBtn");
const count = document.getElementById("count");
const bar = document.getElementById("bar");
const character = document.getElementById("character");
const message = document.getElementById("message");

button.onclick = function () {
let sounds = [sound1, sound2, sound3, sound4, sound5];

let randomSound = sounds[Math.floor(Math.random() * sounds.length)];

randomSound.currentTime = 0;
randomSound.play();
  // Character Shake
  character.classList.add("shake");
  setTimeout(function () {
    character.classList.remove("shake");
  }, 250);

  // Counter
  clicks++;
  count.innerText = clicks;

  // Progress Bar
  bar.style.width = Math.min(clicks, 100) + "%";

  // Character Face Change
  if (clicks <= 20) {
    character.src = "face1.png";
    message.innerText = "😏 I said DON'T!";
  } else if (clicks <= 40) {
    character.src = "face2.png";
    message.innerText = "😒 Seriously?";
  } else if (clicks <= 60) {
    character.src = "face3.png";
    message.innerText = "😤 Stop clicking!";
  } else if (clicks <= 80) {
    character.src = "face4.png";
    message.innerText = "😡 WHY ARE YOU DOING THIS?!";
  } else if (clicks <= 99) {
    character.src = "face5.png";
    message.innerText = "🤯 You have no self control!";
  } else {
    character.src = "face6.png";
    message.innerText = "💀 Fine... You Win!";
    winScreen.style.display = "flex";

confetti({
particleCount:250,
spread:120
});
  }

};
