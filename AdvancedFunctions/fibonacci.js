// More debugging required
function getFibonator() {
    this.previousPrev = 0;
    this.prev = 1;

    const nextFibonacci = () => {
        let currentFibonacci = this.previousPrev + this.prev;

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