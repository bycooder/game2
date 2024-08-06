const result = document.querySelector("#result");
const hamyakImgs = document.querySelectorAll(".hamyak");
const yomonImgs = document.querySelectorAll(".yomon");
let score = 0;
let isRunning = false;
let timer;
let currentHamyak = null; // Track the currently selected Hamyak

function start() {
  if (!isRunning) {
    timer = setInterval(generateNumber, 800);
    isRunning = true;
  }
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  score = 0;
  hamyakImgs.forEach((img) => (img.style.display = "none"));
  yomonImgs.forEach((img) => (img.style.display = "none"));
  result.innerHTML = `point:0`; // Update score display
}

function clear() {
  hamyakImgs.forEach((img) => (img.style.display = "none"));
  yomonImgs.forEach((img) => (img.style.display = "none"));
}
function gameOver() {
  clearInterval(timer);
  isRunning = false;
  score = 0;
  result.innerHTML = `Game over`;
}
function generateNumber() {
  const hamyakRandomNumber = Math.floor(Math.random() * 9 + 1);
  const yomonRandomNumber = Math.floor(Math.random() * 9 + 1);
  if (
    hamyakRandomNumber === yomonRandomNumber &&
    hamyakRandomNumber < 9 &&
    yomonRandomNumber < 9
  ) {
    hamyakRandomNumber++;
    return hamyakRandomNumber;
  }
  if (isRunning) {
    // Hide all images before showing new ones
    hamyakImgs.forEach((img) => (img.style.display = "none"));
    yomonImgs.forEach((img) => (img.style.display = "none"));

    // Show the selected hamyak and yomon images
    const selectedHamyak = document.getElementById(
      `hamyakBtn-${hamyakRandomNumber}`
    );
    const selectedYomon = document.getElementById(
      `yomonBtn-${yomonRandomNumber}`
    );
    if (selectedHamyak) {
      selectedHamyak.style.display = "block";
      currentHamyak = selectedHamyak; // Track the currently displayed Hamyak
    }
    if (selectedYomon) selectedYomon.style.display = "block";

    // Hide the selected images again after 1 second
    setTimeout(() => {
      if (selectedHamyak) selectedHamyak.style.display = "none";
      if (selectedYomon) selectedYomon.style.display = "none";
      currentHamyak = null; // Reset the tracked Hamyak
    }, 800);
  }

  result.innerHTML = `point: ${score}`;
}

// Attach click event listeners to all hamyak images

function scorePlus() {
  score += 10;
  result.innerHTML = `point: ${score}`;
}
