function guessNumber() {
    const random = Math.floor(Math.random() * 30) + 1;
    let number = parseInt(prompt('Guess a number from 1 to 30: '));

    while (number !== random) {
        if (number < random) {
            number = parseInt(prompt('Too low! Guess again: '));
        } else if (number > random) {
            number = parseInt(prompt('Too high! Guess again: '));
        }
    }

    console.log("You guessed the winning number, " + random + "! Congratulations!");
}

guessNumber();