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
            return "You loose. Paper wraps rock."
        } 
        return "You won. Paper crushs scissors."
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You loose. Scissors cut paper."
        } 
        return "You won. paper folds rock."
    } else {
        if (computerSelection === "rock") {
            return "You loose. Rock crush scissors."
        } 
        return "You won. scissors cut paper."
    }
}

function game() {
    let playerSelection = prompt("choice: ");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

const btnRsp = document.querySelectorAll('button');

btnRsp.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        alert(playRound(e.target.id, getComputerChoice()));
    });
});

