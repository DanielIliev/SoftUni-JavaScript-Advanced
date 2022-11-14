function factorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;
    for (let index = 1; index <= num1; index++) {
        factorial1*=index;
    }
    for (let index = 1; index <= num2; index++) {
        factorial2*=index;
    }
    console.log((factorial1/factorial2).toFixed(2));
}
// factorialDivision(6,2);