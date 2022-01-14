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

function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { 
        return 0                                  
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return 1                              
        }
        else if (computerSelection == "scissors"){
          return -1           
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
           return 1
        }
        else if (computerSelection == "rock"){
            return -1
            
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return 1    
        }
        else if (computerSelection == "paper"){
            return -1   
        }
    }
}

function playRound (userChoice){
    let playerSelection = userChoice
    console.log(playerSelection)
    let computerSelection = computerPlay()
    let res = game(playerSelection, computerSelection)
    if (res == -1){
        playerScore++
    }else if (res == 1){
        computerScore ++
    }
    scoreDiv.textContent = `Computer chose ${computerSelection}. Score is COMPUTER: ${computerScore} YOU: ${playerScore}`
    if ((playerScore == 5) || (computerScore == 5)){
        finish (playerScore, computerScore)
        
    }

}
function finish(playerScore, computerScore) {
    
    if (playerScore > computerScore){
        resultDiv.textContent = 'Yayy!! You won'  
    }
    else if (playerScore < computerScore){
        resultDiv.textContent =  'Ow :( you lost'
    }
    else {
        resultDiv.textContent = 'It\s a tie'
    }
    resultDiv.style.visibility = 'visible'
    tryAgainButton.style.visibility = 'visible'
    disableButtons()

}
function reset() {
    
    playerScore = 0
    computerScore = 0
    tryAgainButton.style.visibility = 'hidden'
    resultDiv.style.visibility = 'hidden'
    scoreDiv.textContent = ''
    enableButtons()
    
}

function enableButtons (){
    playButtons.forEach((button) => {
        button.disabled = false
    })
}
 function disableButtons () {
     playButtons.forEach((button) => {
         button.disabled = true
     })
}

let playerScore = 0
let computerScore = 0
let resultDiv = document.getElementById('result')
resultDiv.textContent = ''
resultDiv.style.visibility = 'hidden'
let tryAgainButton = document.getElementById('again')
tryAgainButton.style.visibility = 'hidden'
let scoreDiv = document.querySelector('div')
let playButtons = document.querySelectorAll('.selection')
playButtons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.value))
})
tryAgainButton.addEventListener('click', reset)
    


