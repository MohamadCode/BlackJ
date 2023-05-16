
let cards = []
let sum = 0
let hasblackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function gerRandomCard() {
let randomNumer = Math.floor( Math.random()*13 ) + 1  

    if (randomNumer > 10) {
        return 10
    }
    else if (randomNumer === 1) {
        return 11
    }
    else {
        return randomNumer
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()


}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " + sum
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }

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
    let cardnumb = gerRandomCard()
    sum += cardnumb
    cards.push(cardnumb)
    console.log(cards)
    renderGame()
}


