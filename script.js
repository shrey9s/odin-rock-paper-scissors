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
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
        result += `${computerSelection} beats ${playerSelection}. You Lose!`;
    }
    addResult(result);
}

function addResult(result) {
    const resultPara = document.createElement("p");
    const resultsDiv = document.querySelector(".results");
    resultPara.textContent = result;
    resultsDiv.appendChild(resultPara);
}

//const rockBtn = document.querySelector(".rock-btn");
//rockBtn.addEventListener("click", () => { playRound("Rock"); });

//const paperBtn = document.querySelector(".paper-btn");
//paperBtn.addEventListener("click", () => { playRound("Paper"); });

//const scissorsBtn = document.querySelector(".scissors-btn");
//scissorsBtn.addEventListener("click", () => { playRound("Scissors"); });

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", () => { playRound(btn.textContent); }));

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".results");




