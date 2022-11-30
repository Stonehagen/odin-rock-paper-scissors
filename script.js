function getComputerChoice() {
    // to be implemented
    let figures = ["rock", "paper", "scissors"]
    let rndN = Math.floor(Math.random() * 3)
    return figures[rndN]
}

function playRound(playerSelection, computerSelection) {
    

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();