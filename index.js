// Getting the dodger element
const dodger = document.getElementById("dodger");

// To move function dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Moving function the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Get the game field width with specific widths
  const gameWidth = 400;

  // Get the dodger width
  const dodgerWidth = 40;

  // Check if the right edge of the dodger is within the game field
  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

// The left arrow key event listener
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// The right arrow key event Listener
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
