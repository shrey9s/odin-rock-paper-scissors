function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {    // Tie
        result = "It's a tie!"
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {    // Player wins
        result = `${playerSelection} beats ${computerSelection}. You Win!`;
        playerScore++;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
        result = `${computerSelection} beats ${playerSelection}. You Lose!`;
        computerScore++;
    }
    displayResult(result, playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function displayResult(result, playerSel, computerSel) {
    resultsDiv.textContent = `You chose ${playerSel}. The computer chose ${computerSel}. `;
    resultsDiv.append(document.createElement("br"));
    resultsDiv.append(document.createTextNode(result));
    resultsDiv.append(document.createElement("br"));
    resultsDiv.appendChild(document.createTextNode(`Score: ${playerScore}:${computerScore}`));
}

function endGame() {
    resultsDiv.appendChild(document.createElement("hr"));
    resultsDiv.append(document.createTextNode("GAME OVER!!!"));
    resultsDiv.appendChild(document.createElement("br"));
    resultsDiv.appendChild(document.createTextNode(`Final Score: ${playerScore}:${computerScore}`));
    resultsDiv.appendChild(document.createElement("br"));
    resultsDiv.appendChild(document.createTextNode((playerScore === 5) ? "Congratulations, you win!" : "Sorry, you lose!"));
    resultsDiv.appendChild(document.createElement("hr"));
    // Reset game
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector(".results");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", () => { playRound(btn.textContent); }));







