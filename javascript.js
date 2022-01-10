function computerPlay() {
    let random = Math.floor(Math.random() * 3 + 1)
    if (random == 1){
        return "rock"
    }
    else if (random == 2){
        return "paper"        
    }
    else {
        return "scissors"
    }
}

function game(playerSelection, computerSelection){
    if (playerSelection == computerSelection) { 
        alert(`Computer chose ${computerSelection}. It's a tie! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            computerScore++
            alert(`Computer chose ${computerSelection}. You lose! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
        
        }
        else if (computerSelection == "scissors"){
            playerScore++
            alert(`Computer chose ${computerSelection}. You win! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            computerScore++
            alert(`Computer chose ${computerSelection}. You lose! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)  
        }
        else if (computerSelection == "rock"){
            playerScore++
            alert(`Computer chose ${computerSelection}. You win! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            computerScore++
            alert(`Computer chose ${computerSelection}. You lose! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
        }
        else if (computerSelection == "paper"){
            playerScore++
            alert(`Computer chose ${computerSelection}. You win! Score is COMPUTER: ${computerScore} YOU: ${playerScore}`)
        }
    }
}

let playerScore = 0
let computerScore = 0
for (let i = 1; i <=5; i++){
    let playerSelection = prompt("Let's play rock-paper-scissors! Insert your choice below")   
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay()
    game(playerSelection, computerSelection)
}

if (playerScore > computerScore){
    alert("YOU WIN! Congratulations!")
}
else if (playerScore < computerScore){
    alert("You lost! Better luck next time")
}
else {
    alert("It's a tie!")
}
