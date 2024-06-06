const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("you win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("you lose!");
    computerScore++;
  } else {
    console.log("it's a tie.");
  }

  console.log(`your score: ${playerScore}`);
  console.log(`computer's score: ${computerScore}`);
  console.log("..........................");
};

const play = () => {
  const playerChoice = prompt("choose rock, Paper, Scissors");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`you choose ${playerChoice}`);
  } else {
    console.log("you cheated!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);

  const computerChoice = choices[randomNumber];
  console.log(`computerChoice chooses ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play();
};

play();
