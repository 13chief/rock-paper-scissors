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


function playRound(playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    
}


function playerPlay(playerSelection) {

    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    }
}

function game() {
    

}




function resetGame() {
    playerScore = 0;
    computerScore = 0;
}
