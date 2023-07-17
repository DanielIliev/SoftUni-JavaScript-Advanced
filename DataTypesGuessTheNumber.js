// Still working on it
function guessTheNumber() {
    let computerGuess = Math.floor(Math.random() * 100);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Guess my number: ', number => {
        let guess = Number(number);
        if (guess == computerGuess) {
            console.log('Great job');
            readline.close();
        } else if (guess > 50) {
            console.log('Too high, try again!');
            guesser();
        } else if (guess < 50) {
            console.log('Too low, try again!');
            guesser();
        }
    });

    let guesser = () => {
        readline.question('Guess my number: ', number => {});
        // return number;
    }

}
guessTheNumber();