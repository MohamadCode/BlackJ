let firstCard = 7
let secondCard = 14
let sum = firstCard + secondCard
let hasblackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} 
else if (sum === 21) {
    console.log("Hooray! You've got Blackjack! 🥳")
    hasblackJack = true
}
else {
    console.log("GAME OVER! 😭")
}


console.log(hasblackJack)