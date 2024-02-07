let target = Math.round(Math.random() * 100);
console.log(target)

const question = document.querySelector('.question');

const genButton = document.querySelector('.gen-button');

genButton.addEventListener('click', function (playerInput) {
    var playerInput = document.querySelector('.input').value;
    console.log(playerInput)

    const message = document.querySelector('.guess-message');

    playGame();

    if (playerInput < target) {
        message.innerHTML = "Your guess is too low."
    } else if (playerInput > target) {
        message.innerHTML = "Your guess is too high."
    } else if (playerInput == target) {
        message.innerHTML = "You've guessed it!"
    }
    
});

function playGame() {
    return target;
}


if(target >= 1 && target <= 10) {
    question.innerHTML = "Your number is between 1-10."
} else if(target >= 10 && target <= 20) {
    question.innerHTML = "Your number is between 10-20."
} else if (target >= 20 && target <= 30 ) {
    question.innerHTML = "Your number is between 20-30."
} else if (target >= 30 && target <= 40 ) {
    question.innerHTML = "Your number is between 30-40."
} else if (target >= 40 && target <= 50 ) {
    question.innerHTML = "Your number is between 40-50."
} else if (target >= 50 && target <= 60) {
    question.innerHTML = "Your number is between 50-60."
} else if (target >= 60 && target <= 70) {
    question.innerHTML = "Your number is between 60-70."
} else if (target >= 70 && target <= 80) {
    question.innerHTML = "Your number is between 70-80."
} else if (target >= 80 && target <= 90) {
    question.innerHTML = "Your number is between 80-90."
} else if (target >= 90 && target <= 100) {
    question.innerHTML = "Your number is between 90-100."
    
} 

