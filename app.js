let firstCard = 8
let secondCard = 14
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true



if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} 
else if (sum === 21) {
    console.log("Hooray! You've got Blackjack! 🥳")
    hasblackJack = true
}
else {
    console.log("GAME OVER! 😭")
    isAlive = false
}

console.log(isAlive)
console.log(hasblackJack)