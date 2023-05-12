let firstCard = 5
let secondCard = 14
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function startGame() {
    renderGame()


}

function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    
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

    messageEl.textContent = message
}

function newCard() {
    
    console.log("Drawing a new card from the deck!")
    let cardnumb = 6
    sum += cardnumb
    cards.push(cardnumb)
    console.log(cards)
    renderGame()
}





