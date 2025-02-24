// Function to roll the dice and update the images
function rollDice() {
  // Generate random numbers for both dice
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Select the dice image elements
  let dice1 = document.querySelector(".img1");
  let dice2 = document.querySelector(".img2");

  // Select the <h1> header element
  let header = document.querySelector("h1");

  // Update the images dynamically
  dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
  dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);

  // Update the header text based on the dice roll
  if (randomNumber1 > randomNumber2) {
    header.textContent = "🚩 Player 1 Wins!";
    header.style.fontSize = "4rem";
  } else if (randomNumber1 < randomNumber2) {
    header.textContent = "Player 2 Wins! 🚩";
    header.style.fontSize = "4rem";
  } else {
    header.textContent = "🏁 Draw!";
  }
}

// Add event listener to the button
document.querySelector("button").addEventListener("click", rollDice);
