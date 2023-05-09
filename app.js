let firstCard = 7
let secondCard = 14
let sum = firstCard + secondCard


if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} 
else if (sum === 21) {
    console.log("Hooray! You've got Blackjack! 🥳")
}
else if (sum > 21) {
    console.log("GAME OVER! 😭")
}