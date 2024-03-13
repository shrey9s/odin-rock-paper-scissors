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
    resultsDiv.appendChild(document.createElement("br"));
    resultsDiv.appendChild(document.createTextNode(result));
    resultsDiv.appendChild(document.createElement("hr"));
    resultsDiv.appendChild(document.createTextNode(`Score: ${playerScore}:${computerScore}`));
    resultsDiv.appendChild(document.createElement("hr"));
}

function endGame() {
    // Create paragraph to hold final result
    const finalResult = document.createElement("p");
    finalResult.textContent = "GAME OVER!!!";
    finalResult.appendChild(document.createElement("br"));
    finalResult.appendChild(document.createTextNode(`Final Score: ${playerScore}:${computerScore}`));
    finalResult.appendChild(document.createElement("br"));
    finalResult.appendChild(document.createTextNode((playerScore === 5) ? "Congratulations, you win!" : "Sorry, you lose!"));
    resultsDiv.appendChild(finalResult);

    // Add styling to paragraph
    finalResult.style.border = "3px dashed #65ff65";
    finalResult.style.padding = "20px 0px";
    finalResult.style.backgroundColor = "#17452a";
    finalResult.style.color = "#65ff65";
    finalResult.style.marginTop = "36px";

    // Reset game
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector(".results");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => { 
    btn.addEventListener("click", () => { 
        playRound(btn.textContent); 
    }); 
});







