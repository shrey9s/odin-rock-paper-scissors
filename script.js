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
    let score = 0;
    let playerSelection, computerSelection, result;
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("You Win!")) {    // Checking if player won the round
            score += 1;
        }
    }
    let finalResult = `You won ${score} rounds out of 5! `;
    if (score >= 3) {
        finalResult += `Congratulations, you win!`;
    }
    else {
        finalResult += `You lose!`;
    }
    console.log(finalResult);
}

playGame();

