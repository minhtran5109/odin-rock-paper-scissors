// Script for the game

let playerChoice, computerChoice;
const selection = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomInt = Math.floor(Math.random()*3);
  return selection[randomInt];
}

function playRound(playerChoice, computerChoice) {
  let result=""
  if (playerChoice == computerChoice) {
    result = "It's a tie!"
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    result = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Paper" && playerChoice == "Rock") ||
    (computerChoice == "Scissors" && playerChoice == "Paper")
  ) {
    result = `You lose! ${playerChoice} cannot beats ${computerChoice}`;
  }
  return result;
}

function handlePlayerChoice(playerString) {
  playerString = playerString.toLowerCase();
  let res;
  if (playerString == "rock") {
    res = 0;
  } else if (playerString == "paper") {
    res = 1;
  } else if (playerString == "scissors") {
    res = 2;
  }
  return selection[res];
}

function game() {
  playerChoice = prompt("Rock, Paper or Scissors", "Rock");
  playerChoice = handlePlayerChoice(playerChoice);
  computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(playRound(playerChoice, computerChoice));

  // TODO: added score, valid input check, play more rounds
}

game();