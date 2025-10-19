// Guess the Number Game

// Random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  let guess = prompt("Guess a number between 1 and 100:");
  attempts++;

  // Convert input to number
  guess = Number(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    continue;
  }

  if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert(`🎉 Congratulations! You guessed it right in ${attempts} attempts.`);
    break;
  }
}
