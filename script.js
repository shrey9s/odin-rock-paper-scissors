function getComputerChoice() {
    // will randomly return 'Rock', 'Paper' or 'Scissors'
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // plays a single round
    // returns a string declaring winner or tie
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {    // Tie
        return `It's a tie! You both chose ${playerSelection}`;
    } 
    else {    // Not a tie
        if (playerSelection === "rock") {    // Player chooses rock
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }
            else if (computerSelection === "scissors") { // (adding condition with else if for readability)
                return "You Win! Rock beats Scissors";
            }
        }
        else if (playerSelection === "paper") {    // Player chooses paper
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            }
            else if (computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }
        }
        else if (playerSelection === "scissors") {    // Player chooses scissors
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            }
            else if (computerSelection === "paper") {
                return "You Win! Scissors beats Paper";
            }
        }
    }
}

// Test code
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function playGame() {
    // plays a five-round game
    // keeps score and reports winner/loser at end
}

