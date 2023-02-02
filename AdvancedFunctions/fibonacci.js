function getFibonator() {
    this.firstFibReturned = false;
    this.firstNumber = 0;
    this.secondNumber = 1;

    const nextFibonacci = () => {
        let currentFibonacci = 1;

        if (this.firstFibReturned === false) {
            currentFibonacci = 1;
            this.firstFibReturned = true;
        } else {
            currentFibonacci = this.firstNumber + this.secondNumber;
            this.firstNumber = secondNumber;
            this.secondNumber = currentFibonacci;
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