function getComputerChoice() {
    // will randomly return 'Rock', 'Paper' or 'Scissors'
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // plays a single round
    // returns a string declaring winner or tie
    playerSelection = capitaliseWord(playerSelection.toLowerCase());
    if (playerSelection === computerSelection) {    // Tie
        return `It's a tie! You both chose ${playerSelection}`;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||    
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {    // Player wins
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || 
            (playerSelection === "Paper" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
}

function capitaliseWord(word) {
    return (word.slice(0,1)).toUpperCase() + word.slice(1, word.length);
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
    let finalResult = `You won ${score} round${(score >= 2) ? 's' : ''} out of 5. `;
    finalResult += (score >= 3) ? `Congratulations, you win!` : `You lose!`;
    console.log(finalResult);
}

playGame();

