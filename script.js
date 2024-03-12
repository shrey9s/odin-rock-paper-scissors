function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = `You chose ${playerSelection}. The computer chose ${computerSelection}. `;
    if (playerSelection === computerSelection) {    // Tie
        result += "It's a tie!"
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {    // Player wins
        result += `${playerSelection} beats ${computerSelection}. You Win!`;
        playerScore++;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
        result += `${computerSelection} beats ${playerSelection}. You Lose!`;
        computerScore++;
    }
    displayResult(result);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function displayResult(result) {
    const resultPara = document.createElement("p");
    resultPara.textContent = result;
    resultPara.appendChild(document.createElement("br"));
    resultPara.appendChild(document.createTextNode(`Score: ${playerScore}:${computerScore}`));
    resultsDiv.appendChild(resultPara);
}

function endGame() {
    const finalResultPara = document.createElement("p");
    finalResultPara.textContent = "GAME OVER!!!";
    finalResultPara.appendChild(document.createElement("br"));
    finalResultPara.appendChild(document.createTextNode(`Final Score: ${playerScore}:${computerScore}`));
    finalResultPara.appendChild(document.createElement("br"));
    finalResultPara.appendChild(document.createTextNode((playerScore === 5) ? "Congratulations, you win!" : "Sorry, you lose!"));
    resultsDiv.appendChild(finalResultPara);
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



// Need to keep count of score so that game stops and
// winner is announced once a player reaches 5 points








