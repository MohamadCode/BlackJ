let firstCard = 8
let secondCard = 14
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } 
    else if (sum === 21) {
        message = "Hooray! You've got Blackjack! 🥳"
        hasblackJack = true
    }
    else {
        message = "GAME OVER! 😭"
        isAlive = false
    }

    console.log(message)
}






