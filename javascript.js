let playerScore = 0
let computerScore = 0
let sendButton = document.querySelector(".send")
let userMessage = document.querySelector(".user-message")
let messageBox = document.querySelector(".messages-container")
let stageCounter = 0

function sendMessage(author, message, box) {
    hideTypingMessage()
    let messageDiv = document.createElement("div")
    if(author == "You"){
    messageDiv.classList.add("user")
    } else {
        messageDiv.classList.add("Doris")
    }
    messageDiv.textContent = message
    box.appendChild(messageDiv)
    scroll()
}

function interpretUserInput(text){
    if(stageCounter == 0){
        if(userMessage == "yes"){
            showTypingMessage()
            setTimeout(sendMessage, 1000, "Doris", "Okay, let's start! We'll play until one of us reaches 5 points. Don't worry, I'm not cheating. My choices are randomly generated :) Choose rock, paper or scissors", messageBox)
            scroll()
            stageCounter = 1
        } else if(userMessage == "no"){
            showTypingMessage()
            setTimeout(sendMessage, 1000, "Doris", "Sorry to hear that. Just write \"yes\" if you change your mind", messageBox)
            scroll()
            stageCounter = 0  
        } else {
            showTypingMessage()
            setTimeout(sendMessage, 1000, "Doris", "Sorry, I don't understand. I'm just a silly computer. Please just yes or no", messageBox)
            scroll()
            stageCounter = 0  
        }
    }
    else{
        playRound(userMessage)      
    }

}

function getUserMessage(){
    userMessage = document.querySelector(".user-message")
    userMessage = userMessage.value.toLowerCase()
    document.forms["user-input"].reset()
    sendMessage("You", userMessage, messageBox)
    scroll()
    interpretUserInput(userMessage)
}

function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { 
        return 0                                  
    }

    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return 1                              
        }
        else if (computerSelection == "scissors"){
          return -1           
        }
    }

    else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
           return 1
        }
        else if (computerSelection == "rock"){
            return -1
            
        }
    }

    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return 1    
        }
        else if (computerSelection == "paper"){
            return -1   
        }
    }
    else {
        showTypingMessage()
        setTimeout(sendMessage, 1000, "Doris", "Sorry, I don't understand. I'm just a silly computer. Please just rock, paper or scissors", messageBox)
        scroll()
        return 2
    }
    
}

function playRound (userChoice){
    let playerSelection = userChoice
    let computerSelection = computerPlay()
    let res = game(playerSelection, computerSelection)
    if (res == -1){
        playerScore++
    }else if (res == 1){
        computerScore ++
    }
    if ((res == -1) || (res == 1) || (res == 0)){
        showTypingMessage()
        setTimeout(sendMessage, 1000, "Doris", `I chose ${computerSelection}. Score is DORIS: ${computerScore} YOU: ${playerScore}`, messageBox)
        scroll()
    }    
    if ((playerScore == 5) || (computerScore == 5)){
        finish (playerScore, computerScore)
        
    }

}

function finish(playerScore, computerScore) {
    
    if (playerScore > computerScore) {
        showTypingMessage()
        setTimeout(sendMessage, 1000, "Doris", "Wow!! You won! Do you want to play again?", messageBox)
        scroll() 
        reset()
    }
    else if (playerScore < computerScore){
        showTypingMessage()
        setTimeout(sendMessage, 1000, "Doris", "Ow :( you lost. Do you want to play again?", messageBox)
        scroll() 
        reset()
    }
    else {
        showTypingMessage()
        setTimeout(sendMessage, 1000, "Doris", "It's a tie. Do you want to play again?", messageBox)
        scroll() 
        reset()
    }   
    
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3 + 1)
    if (random == 1) {
        return "rock"
    }
    else if (random == 2){
        return "paper"        
    }
    else {
        return "scissors"
    }
}

function scroll(){
    messageBox.scrollTop = messageBox.scrollHeight
}


function showTypingMessage() {
    scroll()
    let typingDiv = document.createElement("div")
    messageBox.appendChild(typingDiv)
    typingDiv.textContent = "Doris is typing..."
    typingDiv.classList.add("typing")
    
}

function hideTypingMessage() {
    let typingDiv = document.querySelector(".typing")
    if(typingDiv){
    typingDiv.remove()
    }
}

function reset() {
    playerScore = 0
    computerScore = 0
    stageCounter = 0
}

hideTypingMessage()
window.addEventListener("load", () => {
    setTimeout(sendMessage, 600, "Doris", "Hello! I heard you would like to play some Rock-Paper-Scissors! Yes or no?", messageBox)
    userMessage.focus()
})
sendButton.addEventListener("click", getUserMessage)
sendButton.addEventListener("click", (e) => e.preventDefault())
