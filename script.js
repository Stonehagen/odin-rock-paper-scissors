

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
        return "You won. Paper wraps rock."
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You loose. Scissors cut paper."
        } 
        return "You won. Scissors cut paper."
    } else {
        if (computerSelection === "rock") {
            return "You loose. Rock crush scissors."
        } 
        return "You won. Rock crush scissors."
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("choice: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    } 
}

game();

