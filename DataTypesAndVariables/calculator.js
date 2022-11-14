function calculator(number1, operator, number2) {
    switch(operator) {
        case '+':
            console.log((number1+number2).toFixed(2));
        break;
        case '-':
            console.log((number1-number2).toFixed(2));
        break;
        case '*':
            console.log((number1*number2).toFixed(2));
        break;
        case '/':
            console.log((number1/number2).toFixed(2));
        break;
    }
}