let firstCard = gerRandomCard()
let secondCard = gerRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function gerRandomCard() {
    return 5
}


function startGame() {
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


