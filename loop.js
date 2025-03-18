const friends = ["Andy", "Tomal", "Sabrina", "David", "Ross", "Raichel"];

for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  if (element === "Sabrina") {
    continue;
  }
  console.log(element);
}

// const randomNum = 50;
// let guessedNum = prompt("Enter a number to start the game: ");
// while (randomNum != guessedNum) {
//   guessedNum = prompt("Sorry! Please guess again.");
// }
// console.log("Congratulations! You guessed it right.");
