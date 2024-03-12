function getComputerChoice() {
    // will randomly return 'Rock', 'Paper' or 'Scissors'
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection) {
    // plays a single round
    // returns a string declaring winner or tie
    let computerSelection = getComputerChoice();
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.\n`);
    if (playerSelection === computerSelection) {    // Tie
        console.log("It's a tie!")
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {    // Player wins
        console.log(`${playerSelection} beats ${computerSelection}. You Win!`);
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {    // Computer wins
        console.log(`${computerSelection} beats ${playerSelection}. You Lose!`);
    }
}

const rockBtn = document.querySelector(".rock-btn");
rockBtn.addEventListener("click", () => { playRound("Rock"); });

const paperBtn = document.querySelector(".paper-btn");
paperBtn.addEventListener("click", () => { playRound("Paper"); });

const scissorsBtn = document.querySelector(".scissors-btn");
scissorsBtn.addEventListener("click", () => { playRound("Scissors"); });





