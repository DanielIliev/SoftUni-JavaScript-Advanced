function simpleCalculator(numOne, numTwo, operator) {
    let total = 0;
    let firstNumber = Number(numOne);
    let secondNumber = Number(numTwo);
    switch(operator) {
        case 'add':
            total+= firstNumber+secondNumber;
        break;
        case 'subtract':
            total+= firstNumber-secondNumber;
        break;
        case 'multiply':
            total+= firstNumber*secondNumber;
        break;
        case 'divide':
            total+= firstNumber/secondNumber;
        break;
    }
    console.log(total);
}
simpleCalculator(5, 2, 'multiply');