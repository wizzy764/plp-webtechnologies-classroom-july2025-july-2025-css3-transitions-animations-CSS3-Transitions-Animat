// -----------------------------
// Part 2: Functions & Scope
// -----------------------------

let clickCount = 0; // Global variable

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to update counter on DOM
function updateCounter(elementId, increment) {
  clickCount += increment;
  document.getElementById(elementId).innerText = `Clicks: ${clickCount}`;
}

// Function to change background color
function changeBgColor(elementId, color) {
  const el = document.getElementById(elementId);
  el.style.backgroundColor = color;
}

// -----------------------------
// Part 3: CSS + JS Interaction
// -----------------------------

// Animate Box
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  box.classList.add("active-animation");

  // Remove class after animation to allow re-trigger
  setTimeout(() => {
    box.classList.remove("active-animation");
  }, 1000);
});

// -----------------------------
// Modal Logic
// -----------------------------
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
