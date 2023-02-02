function getFibonator() {
    let firstFibReturned = false;
    let firstNumber = 0;
    let secondNumber = 1;

    const nextFibonacci = () => {
        let currentFibonacci = 1;

        if (firstFibReturned === false) {
            currentFibonacci = 1;
            firstFibReturned = true;
        } else {
            currentFibonacci = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = currentFibonacci;
        }

        return currentFibonacci;
    };

    return nextFibonacci;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13