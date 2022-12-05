function getComputerChoice() {
    // to be implemented
    let figures = ["rock", "paper", "scissors"]
    let rndN = Math.floor(Math.random() * 3)
    return figures[rndN]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "draw"
    }
    
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            scoreComputer++;
            return "You loose. Paper wraps rock."
        } 
        scorePlayer++;
        return "You won. Paper crushs scissors."
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            scoreComputer++;
            return "You loose. Scissors cut paper."
        } 
        scorePlayer++;
        return "You won. paper folds rock."
    } else {
        if (computerSelection === "rock") {
            scoreComputer++;
            return "You loose. Rock crush scissors."
        } 
        scorePlayer++;
        return "You won. scissors cut paper."
    }
}

function game() {
    let playerSelection = prompt("choice: ");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

const btnRsp = document.querySelectorAll('button');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
let scorePlayer = 0;
let scoreComputer = 0;

score.textContent = '0 : 0';

btnRsp.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        results.textContent = playRound(e.target.id, getComputerChoice());

        score.textContent = 
        `${scorePlayer} : ${scoreComputer}`;

        if (scorePlayer >= 5) {
            results.textContent = "Player won!";
            scorePlayer = 0;
            scoreComputer = 0;
        } else if (scoreComputer >= 5) {
            results.textContent = "Computer won!";
            scorePlayer = 0;
            scoreComputer = 0;
        }
    });
});

