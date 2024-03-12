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
    if (playerSelection === computerSelection) {    // Tie
        return "It's a tie!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {    // Player wins
        return `${playerSelection} beats ${computerSelection}. You Win!`;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
        return `${computerSelection} beats ${playerSelection}. You Lose!`;
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
    let playerScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 5; i++) {
        let playerSelection = (prompt(`Round ${i}: Rock, paper or scissors?`)).toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = (prompt("Please choose either rock, paper or scissors")).toLowerCase();
        } // check for valid input (no empty strings or other strings/numbers)
        playerSelection = capitaliseWord(playerSelection);
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("You Win!")) playerScore += 1;
        else if (result.includes("You Lose!")) computerScore += 1;
        console.log(`Round ${i}:\nYou chose ${playerSelection}. The computer chose ${computerSelection}.\n` + result + `\nScore: ${playerScore}:${computerScore}`);
    }
    let finalResult = `Final Score: ${playerScore}:${computerScore}\n`;
    if (playerScore === computerScore) {
        console.log(finalResult + "It's a tie!");
    }
    else if (playerScore > computerScore) {
        console.log(finalResult + "Congratulations, you win!");
    }
    else if (playerScore < computerScore) {
        console.log(finalResult + "Sorry, you lose!");
    }
}

function capitaliseWord(word) {
    return (word.slice(0, 1)).toUpperCase() + word.slice(1, word.length);
}

playGame();

