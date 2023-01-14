// Script for the game

let playerChoice, computerChoice;
let playerScore = 0, computerScore = 0;
const selection = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomInt = Math.floor(Math.random()*3);
  return selection[randomInt];
}

function playRound(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice == computerChoice) {
    playerScore++;
    computerScore++;
    result = "It's a tie!";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    playerScore++;
    result = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Paper" && playerChoice == "Rock") ||
    (computerChoice == "Scissors" && playerChoice == "Paper")
  ) {
    computerScore++;
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
  } else {
    alert("Please enter a valid move. Refresh to try again.");
  }
  return selection[res];
}

function checkWinner(pScore, cScore) {
  if (pScore > cScore) {
    return "Victory! You beats the computer."
  } else if (pScore < cScore) {
    return "Defeated! Better luck next time."
  } else {
    return "Draw!"
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i+1));
    playerChoice = prompt("Rock, Paper or Scissors", "Rock");
    playerChoice = handlePlayerChoice(playerChoice);
    computerChoice = getComputerChoice();
    console.log("You: " + playerChoice);
    console.log("Computer: " + computerChoice);
    console.log(playRound(playerChoice, computerChoice));

    // TODO: added score, valid input check, play more rounds
  }
  console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);
  console.log(checkWinner(playerScore, computerScore));
}

game();