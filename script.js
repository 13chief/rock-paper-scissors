function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
}


function getWinner(playerSelection, computerSelection) {
    // rock vs paper
    if (playerSelection === "rock" && computerSelection === 'paper') {
        return 'Robots win! Paper beats rock!'
    } 
    if (playerSelection === "paper" && computerSelection === 'rock') {
        return 'Humanity has won! Paper beats rock!'
    }
    // rock vs scissors
    if (playerSelection === "rock" && computerSelection === 'scissors') {
        return 'Humanity has won! Rock beats scissors!'
    }
    if (playerSelection === "scissors" && computerSelection === 'rock') {
        return 'Robots win! Rock beats scissors!'
    }
    // paper vs scissors
    if (playerSelection === "paper" && computerSelection === 'scissors') {
        return 'Robots win! Scissors beat paper!'
    } 
    if (playerSelection === "scissors" && computerSelection === 'paper') {
        return 'Humanity has won! Scissors beat paper!'
    }
    // tie
    if (playerSelection === "paper" && computerSelection === 'paper') {
        return 'Tie! Paper vs Paper!'
    } 
    if (playerSelection === "scissors" && computerSelection === 'scissors') {
        return 'Tie! Scissors vs Scissors!'
    }
    if (playerSelection === "rock" && computerSelection === 'rock') {
        return 'Tie! Rock vs Rock!'
    }
    
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection);
    
    if (result.includes('Humanity')) {
        playerScore++;
    } else if (result.includes('Robots')) {
        computerScore++;
    }
    
    console.log(result);
}

function playerPlay() {
    let playerSelection = prompt('Choose rock, paper, or scissors: ').toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        return 'Invalid input. Please try again.';
    }
}

function game() {
    for (let i = 0; i < 5; i++) { 
        let computerSelection = getComputerChoice();
        let playerSelection = playerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log("Humanity triumphs over Robots!");
    } else if (playerScore < computerScore) {
        console.log("Robots dominate over Humanity!");
    } else {
        console.log("It's a tie! Humanity and Robots share the victory.");
    }
}