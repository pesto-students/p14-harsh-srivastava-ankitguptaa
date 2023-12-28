function playGuessingGame(numToGuess, totalGuesses = 10) {
    let userInput = "";
    userInput = prompt("Enter a number between 1 to 100.");
    let count = 1;
    while (Number(userInput) !== numToGuess) {
        if (count === totalGuesses) {
            alert("only " + totalGuesses + " guesses are allowed." );
            return 0;
        }
        count++;
        if (isNaN(userInput)) {
            userInput = prompt("X is too large. Guess a smaller number.");
        } else if (Number(userInput) < numToGuess) {
            userInput = prompt("X is too small. Guess a larger number.");
        } else if (Number(userInput) > numToGuess) {
            userInput = prompt("X is too large. Guess a smaller number.");
        }
    }

    if(Number(userInput) === numToGuess) {
        alert("You are correct !!");
    }
    

    return count;
}